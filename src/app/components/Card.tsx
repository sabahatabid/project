
interface CardProps {
    title: string; // Title must be a string
    description: string; // Description must be a string
  }
  
  const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default Card;
  