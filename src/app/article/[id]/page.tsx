import React from 'react';

const ArticlePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/1200x400" alt="AIと未来の働き方" className="w-full h-64 object-cover" />
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">最新のAI技術が変える未来の働き方</h2>
              <div className="flex items-center text-gray-600 mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>投稿日: 2024年11月1日</span>
              </div>

              <div className="prose max-w-none">
                <p className="mb-4">
                  人工知能（AI）の急速な進化は、私たちの働き方に革命をもたらしています。本記事では、AIが職場にもたらす変革と、それに伴う課題について深く掘り下げていきます。
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">1. 自動化の加速</h3>
                <p className="mb-4">
                  AIの発展により、これまで人間が行っていた多くの作業が自動化されつつあります。例えば、データ入力、スケジュール管理、さらには基本的な分析タスクなどが、AIによって効率的に処理されるようになっています。
                </p>
                <p className="mb-4">
                  これにより、人間の労働者は、より創造的で戦略的なタスクに集中できるようになります。しかし同時に、特定の職種の需要が減少する可能性もあり、労働市場の再構築が必要となるでしょう。
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">2. 意思決定支援の進化</h3>
                <p className="mb-4">
                  AIは膨大なデータを分析し、洞察を提供することで、ビジネスの意思決定プロセスを支援します。機械学習アルゴリズムは、市場トレンド、顧客行動、リスク分析などの複雑なパターンを識別し、経営者や管理職の戦略立案をサポートします。
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">3. 新しいスキルの需要</h3>
                <p className="mb-4">
                  AIの台頭により、労働市場で求められるスキルセットが変化しています。データサイエンス、機械学習、AI倫理などの分野のスキルが高く評価されるようになっています。同時に、AIと協働するためのスキル、つまりAIシステムの出力を解釈し、それを基に判断を下す能力も重要になってきています。
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">4. 働き方の柔軟性</h3>
                <p className="mb-4">
                  AIとロボティクスの進歩により、リモートワークやフレックスタイムなどの柔軟な働き方がさらに普及すると予想されます。AIが日常的なタスクを処理することで、人間の労働者は時間と場所の制約から解放され、より柔軟に働くことができるようになるでしょう。
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">結論</h3>
                <p className="mb-4">
                  AIは確かに私たちの働き方を大きく変えつつあります。この変化に適応し、恩恵を受けるためには、継続的な学習と柔軟な思考が不可欠です。企業は従業員のスキル開発に投資し、AIとの共存を前提とした新しい職場環境を整備する必要があります。個人も、自身のスキルを常にアップデートし、AIと協調して働く準備をすることが重要です。
                </p>
                <p>
                  AIの進化は止まることなく続きます。私たちはこの変化を恐れるのではなく、むしろ積極的に受け入れ、より創造的で充実した働き方を実現するチャンスとして捉えるべきでしょう。
                </p>
              </div>
            </div>
          </article>

          {/* サイドバー */}
          <aside className="md:col-span-1 space-y-8">
            {/* カテゴリーセクション */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">カテゴリー</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 hover:underline">AI & 機械学習</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Web開発</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">クラウドコンピューティング</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">サイバーセキュリティ</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">モバイルアプリ開発</a></li>
              </ul>
            </div>

            {/* 最近のツイートセクション */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                最新のツイート
              </h4>
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
            </div>
          </aside>

        </div>

        {/* 関連記事セクション */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">AI倫理：技術の発展と人間性の共存</h4>
              <p className="text-gray-600 mb-4">AIの進化に伴う倫理的課題と、それに対する取り組みについて解説します。</p>
              <a href="#" className="text-blue-600 hover:underline">読む →</a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">機械学習エンジニアになるためのロードマップ</h4>
              <p className="text-gray-600 mb-4">AI時代に求められる機械学習エンジニアになるための学習パスを紹介します。</p>
              <a href="#" className="text-blue-600 hover:underline">読む →</a>
            </div>
          </div>
        </div>

      </main>
    </div >
    );
};

export default ArticlePage;