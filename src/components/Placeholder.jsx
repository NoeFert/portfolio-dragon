// Affiche l'image si elle existe, sinon un cadre avec un libellé.
export default function Placeholder({ src, label, className = "" }) {
  return (
    <div className={`placeholder ${className}`}>
      {src ? <img src={src} alt={label} /> : label}
    </div>
  );
}
