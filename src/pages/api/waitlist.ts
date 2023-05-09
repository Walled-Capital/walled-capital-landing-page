import { NextApiRequest, NextApiResponse } from "next";
import { getDoc } from "@src/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, country } = JSON.parse(req.body);

  const doc = await getDoc();

  try {
    if (!email) {
      throw Error("The email field is required");
    }

    let sheet = doc.sheetsByTitle["waitlist"];
    if (!sheet) {
      sheet = await doc.addSheet({
        headerValues: ["first_name", "last_name", "country", "email", "date"],
        title: "waitlist",
      });
    }
    const rows = await sheet.getRows();

    const emailIsExist = rows.find(
      // @ts-ignore
      (entity) => entity.email === email
    );

    if (!emailIsExist) {
      await sheet.addRow({
        first_name: firstName,
        last_name: lastName,
        email,
        country,
        date: new Date().toISOString(),
      });
    }
    res.status(200).json({ message: "A ok!" });
  } catch (error) {
    res.status(500).json(error);
  }
}
