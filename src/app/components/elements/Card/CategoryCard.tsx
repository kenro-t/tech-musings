export default function CategoryCard({ content_name }) {
  return (
    <li>
      <a href="#" className="text-blue-600 hover:underline">
        {content_name}
      </a>
    </li>
  );
}
