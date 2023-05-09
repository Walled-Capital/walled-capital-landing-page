import { GoogleSpreadsheet } from "google-spreadsheet";

export const getDoc = async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/gm, "\n"),
  });
  await doc.loadInfo();

  return doc;
};

export const checkReCaptcha = async (gRecaptchaToken: string) => {
  return new Promise(async (resolve, reject) => {
    fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCH_SECRET_KEY}&response=${gRecaptchaToken}`,
    })
      .then((reCaptchaRes) => reCaptchaRes.json())
      .then((reCaptchaRes) => {
        if (reCaptchaRes?.score > 0.5) {
          resolve({
            status: "success",
            message: "Enquiry submitted successfully",
          });
        } else {

          reject({
            status: "failure",
            message: "Error submitting the enquiry form",
          });
        }
      });
  });
};
