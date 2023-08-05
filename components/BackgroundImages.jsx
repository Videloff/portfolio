import '../src/App.css'; // Le fichier CSS pour les styles

const BackgroundImages = () => {
  return (
    <div className="background-images-container">
      <img className="top-right-image" src="../src/assets/bg-right.svg" alt="Top Right" />
      <img className="bottom-left-image" src="../src/assets/bg-left.svg" alt="Bottom Left" />
    </div>
  );
};

export default BackgroundImages;