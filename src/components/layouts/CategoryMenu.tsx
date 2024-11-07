import CategoryCard from "@/components/elements/Card/CategoryCard";

export default function CategoryMenu() {
  return (
    <>
      <h4 className="text-xl font-bold text-gray-800 mb-4">カテゴリー</h4>
      <ul className="space-y-2">
        <CategoryCard content_name="クラウドコンピューティング" />
        <CategoryCard content_name="モバイルアプリ開発" />
        <CategoryCard content_name="AI" />
        <CategoryCard content_name="モバイルアプリ開発" />
        <CategoryCard content_name="モバイルアプリ開発" />
      </ul>
    </>
  );
}
