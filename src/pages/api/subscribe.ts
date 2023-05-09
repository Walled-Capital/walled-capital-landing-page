import { NextApiRequest, NextApiResponse } from "next";
import { checkReCaptcha, getDoc } from "@src/pages/api/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, gReCaptchaToken } = JSON.parse(req.body);

  const doc = await getDoc();

  try {
    if (!email) {
      throw Error("The email field is required");
    }
    await checkReCaptcha(gReCaptchaToken);

    let sheet = doc.sheetsByTitle["emails"];
    if (!sheet) {
      sheet = await doc.addSheet({
        headerValues: ["email", "date"],
        title: "emails",
      });
    }
    const rows = await sheet.getRows();

    const emailIsExist = rows.find(
      // @ts-ignore
      (entity) => entity.email === email
    );

    if (!emailIsExist) {
      await sheet.addRow({
        email: email,
        date: new Date().toISOString(),
      });
    }
    res.status(200).json({ message: "A ok!" });
  } catch (error) {
    res.status(500).json(error);
  }
}
