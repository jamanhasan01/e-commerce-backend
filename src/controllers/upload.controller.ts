import { Request, Response } from "express";

/* =============================== Image Upload ================================ */
export const imageUpload = (req: Request, res: Response) => {
    
  res.status(200).json({ ok: true });
};
