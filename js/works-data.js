const worksList = [
  {
    fileName: 'addworks',
    workName: 'AddWorks',
    thumb: '/works/addworks/img/thumbnail.png',
    lang: [ 'HTML',
            'CSS(Sass)',
            'JavaScript'
          ],
    demoLink: '/works/addworks/demo/work/230101/view.html',
    downloadLink: 'https://github.com/moliyuzuha/AddWorks/tree/release',

    mainContent: `
      <h3>overview</h3>
      <div class="text-area">
        <p>Webサイト向け画像・書籍ビューア設置スクリプトです。</p>
        <p>なるべく簡単な手順で作品の追加・編集ができるように作りました。<em>コードは全く書かずに、テキスト編集だけで</em>作品閲覧画面を自動生成できます。</p>

        <h4>作品の追加は4STEP!</h4>
        <ol>
          <li>作品フォルダを複製</li>
          <li>フォルダ名を作品の制作日付に変更(YYMDD形式)</li>
          <li>フォルダ内に作品画像ファイルを追加</li>
          <li>作品情報ファイルにタイトル・作品説明、などを記入</li>
        </ol>
        <p>入力した情報をもとに、スクリプトで作品ページが自動生成されます。</p>

        <h4>カスタマイズも簡単！</h4>
        <p>初期設定用ファイルを編集するだけで、サイト情報やサイト内リンクのカスタマイズが可能です。</p>
        <ul>
          <li>サイトタイトル(&lt;title&gt;タグ部分)</li>
          <li>metaタグ、ファビコン、ショートカット画像の設定(&lt;head&gt;タグ内)</li>
          <li>デフォルトヘッダー・フッターのリンク先設定</li>
          <li>カスタムヘッダー・フッターの設定(デフォルトヘッダー・フッターは使用せず、任意のHTMLに変更できます)</li>
        </ul>
        <p>また、カスタマイズ用のcssファイルも用意しています。自由にご自身のWebサイトに合わせた外観にすることもできます。</p>
      </div>
      <h3>file organization</h3>
      <div class="text-area">
        <table>
          <tr>
            <th>file name</th>
            <td>content</td>
          </tr>
          <tr>
            <th>work/</th>
            <td>このファイルごとWebサイトのルートディレクトリ(index.htmlがある階層)に設置してください。</td>
          </tr>
        </table>

        <p>以下はwork/フォルダ内</p>

        <table>
          <tr>
            <th>file name</th>
            <td>content</td>
          </tr>
          <tr>
            <th>AddWorks/</th>
            <td>
              スクリプト本体<br> 
              このフォルダ内のファイルは編集不要。
            </td>
          </tr>
          <tr>
            <th>settings/</th>
            <td>
              設定用フォルダ<br>
            </td>
          </tr>
          <tr>
            <th><span>settings/</span><span>custom.css</span></th>
            <td>
              CSSカスタマイズ用ファイル<br>
              このファイルに記述することで、デフォルトのCSSを上書きできます。
            </td>
          </tr>
          <tr>
            <th><span>settings/</span><span>sitedata.js</span></th>
            <td>
              サイト全体の設定用ファイル<br>
              サイトタイトルや、metaタグ・ファビコンなどのheadコンテンツ、ヘッダー・フッターのカスタマイズが可能です。
            </td>
          </tr>
          <tr>
            <th><span>settings/</span><span>workmanager.js</span></th>
            <td>
              作品データ格納ファイル<br>
              作品タイトル・作品説明・展示形式の指定(画像ごとに表示するか、見開きで表示するか)など、作品データを格納するファイルです。<br>
              このファイルに記入したデータをもとに、作品ページを生成します。
            </td>
          </tr>
          <tr>
            <th>
              <ul class="table-list">
                <li>230101/</li>
                <li>230102/</li>
              </ul>
            </th>
            <td>
              作品フォルダ(サンプル)<br>
              作品の制作日付をYYMMDD形式でフォルダ名に設定します。<br>
            </td>
          </tr>
          <tr>
            <th>
              <ul class="table-list">
                <li><span>230101/</span><span>view.html</span></li>
                <li><span>230102/</span><span>view.html</span></li>
              </ul>
            </th>
            <td>
              作品ページ(サンプル)<br>
              新規作品を追加する際は、このファイルをそのまま作品フォルダにコピペしてください。
            </td>
          </tr>
          <tr>
            <th>
              <ul class="table-list">
                <li>230101/img/</li>
                <li>230102/img/</li>
              </ul>
            </th>
            <td>
              作品画像格納フォルダ(サンプル)<br>
              GIF（.gif）、JPEG（.jpg）、PNG（.png）に対応<br>
              画像のファイル名は連番にしてください。(例: 1.jpg , 2.jpg , 3.jpg , …)
            </td>
          </tr>
        </table>
      </div>
    `
  },
  {
    fileName: 'moli',
    workName: 'moli',
    thumb: '/works/moli/img/thumbnail.png',
    lang: [ 'HTML',
            'CSS(Sass)',
            'JavaScript'
          ],
    demoLink: '/index.html',
    downloadLink: 'https://github.com/moliyuzuha/moliyuzuha.github.io/tree/release',

    mainContent: `
    <h3>overview</h3>
    <div class="text-area">
      <p>当ポートフォリオサイトです。</p>
      <p>実績を見せるために、サイト自体はモノクロ配色でシンプルなデザインに。地味にならないよう、太めボーダーでキャッチーなデザインを目指しました。</p>
    `
  }
]