const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-4">
              Tech
              Innovatorsは、急速に進化するテクノロジーの世界において、最新のトレンドと洞察を提供することを使命としています。私たちは、複雑な技術概念をわかりやすく解説し、読者の皆様がテクノロジーの可能性を最大限に活用できるよう支援します。
            </p>
            <p className="text-gray-600">
              私たちは、AI、機械学習、Web開発、クラウドコンピューティング、サイバーセキュリティなど、幅広い分野をカバーし、技術者、ビジネスリーダー、そして技術に興味を持つすべての方々に価値ある情報を提供します。
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Team
            </h3>
            <p className="text-gray-600 mb-4">
              Tech
              Innovatorsのチームは、テクノロジー業界での豊富な経験を持つ専門家で構成されています。ソフトウェアエンジニア、データサイエンティスト、UXデザイナー、そしてテクノロジージャーナリストたちが、最新かつ正確な情報を皆様にお届けします。
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              What We Offer
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>最新のテクノロジートレンドに関する詳細な記事</li>
              <li>実践的なチュートリアルとハウツーガイド</li>
              <li>業界専門家へのインタビュー</li>
              <li>テクノロジーイベントとカンファレンスのレポート</li>
              <li>読者からの質問に答えるQ&Aセクション</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              ご質問、フィードバック、または協力のご提案がありましたら、お気軽にお問い合わせください。
            </p>
            <ul className="text-gray-600">
              <li>Email: contact@techinnovators.com</li>
              <li>Twitter: @TechInnovators</li>
              <li>LinkedIn: Tech Innovators</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
