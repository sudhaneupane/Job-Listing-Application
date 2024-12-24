import { Form } from "../models/form.model.js";

export const createForm = async (req, res) => {
  try {
    const { id } = req.user;

    if (!id) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    const { fullname, email, phone, jobTitle, education, exp, coverLetter } =
      req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "CV file is required.",
      });
    }

    const fileType = req.file.mimetype;
    if (fileType !== "application/pdf") {
      return res.status(400).json({
        success: false,
        message: "Invalid file type. Only PDF files are allowed.",
      });
    }
    const cv = req.file.path;

    if (
      !fullname ||
      !email ||
      !phone ||
      !jobTitle ||
      !cv ||
      !education ||
      !exp ||
      !coverLetter
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const form = await Form.create({
      fullname,
      email,
      phone,
      jobTitle,
      cv,
      education,
      exp,
      coverLetter,
    });

    if (!form) {
      return res.status(500).json({
        success: false,
        message:
          "Unable to submit your application at this time. Please try again later.",
      });
    }
    return res.status(201).json({
      success: true,
      message: "Your application has been successfully submitted!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};
