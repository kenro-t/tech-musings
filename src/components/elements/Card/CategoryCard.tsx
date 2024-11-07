import Link from "next/link";

export default function CategoryCard({ content_name }) {
  return (
    <li>
      <Link href="#" className="text-blue-600 hover:underline">
        {content_name}
      </Link>
    </li>
  );
}
