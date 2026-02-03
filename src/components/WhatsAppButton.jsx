import "./whatsapp.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5585998513856?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20Instituto%20da%20Natureza."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
      />
    </a>
  );
}
