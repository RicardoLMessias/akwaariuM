import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método não permitido" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Preencha todos os campos" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `"Site" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "Novo contato do site",
            html: `
                <h2>Novo contato</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong> ${message}</p>
            `
        });

        return res.status(200).json({ message: "Email enviado com sucesso!" });

    } catch (error) {
        return res.status(500).json({ message: "Erro ao enviar email" });
    }
}