export default function RecentPosts() {
  return (
    <>
      <h4 className="text-xl font-bold text-gray-800 mb-4">最新のツイート</h4>
      <div className="space-y-4">
        <div className="border-b pb-4">
          <p className="text-gray-600">
            新しいReactのフックについて解説しました。パフォーマンス改善に役立つこと間違いなし！
            #React #WebDev
          </p>
          <span className="text-sm text-gray-500">2分前</span>
        </div>
        <div className="border-b pb-4">
          <p className="text-gray-600">
            明日のウェビナーでは、AIの倫理について議論します。ぜひご参加ください！
            #AI #Ethics
          </p>
          <span className="text-sm text-gray-500">1時間前</span>
        </div>
      </div>
    </>
  );
}
