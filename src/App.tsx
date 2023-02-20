import './App.css'

function App() {
    return (
        <section className="text-gray-600 body-font">
            <div className="max-w-4xl px-5 sm:py-16 py-10 mx-auto">
                <div className="w-full pb-4 mb-6 text-left border-b">
                <h1 className="text-2xl font-semibold title-font mb-2 text-gray-900">正規表現チートシート</h1>
                <p className="w-full leading-relaxed text-gray-500">基本的な正規表現をまとめました。思い出すときなどにご活用ください。</p>
                </div>

                {/* リスト一覧 */}
                <div className='flex flex-wrap justify-between'>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>.</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold font-semibold'>なんでもいい1文字</h3>
                            <p className='mb-2'>例）私は..です</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>私は神様です</span>
                                <span>私は天才です</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>私はゴリラです</span>
                                <span>私はです</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>|</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>いずれかの文字（orてきなやつ）</h3>
                            <p className='mb-2'>例）Google|Apple</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>Google</span>
                                <span>Apple</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>Meta</span>
                                <span>Amazon</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>*</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>直前の文字がないか、直前の文字が1個以上つづく</h3>
                            <p className='mb-2'>例）はー*い</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>はい</span>
                                <span>はーーーい</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>はうい</span>
                                <span>はーあ</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>*?</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>*の最短マッチver</h3>
                            <p className='mb-2'>例）{'<'}A*?{'>'}</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block mr-2'><span className='text-pink-500'>最短</span>マッチ</span>
                                <span className='inline-block mr-4'><span className='text-pink-500'>{'<'}AAA{'>'}</span>{'<'}
                                AAA{'>'}</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block mr-2'><span className='text-blue-500'>最長</span>マッチ（+）</span>
                                <span className='inline-block mr-4'><span className='text-blue-500'>{'<'}AAA{'>'}{'<'}AAA{'>'}</span></span>
                                <span></span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>+</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>最低でも1回は直前の文字がつづく</h3>
                            <p className='mb-2'>例）はー+い</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>はーい</span>
                                <span>はーーーい</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>はい</span>
                                <span>はうい</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>+?</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>+の最短マッチver</h3>
                            <p className='mb-2'>例）A+?</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block mr-2'><span className='text-pink-500'>最短</span>マッチ</span>
                                <span className='inline-block mr-4'><span className='text-pink-500'>A</span>AAAAAA</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block mr-2'><span className='text-blue-500'>最長</span>マッチ（+）</span>
                                <span className='inline-block mr-4'><span className='text-blue-500'>AAAAAAA</span></span>
                                <span></span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>?</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>直前の文字がないか、1つだけある</h3>
                            <p className='mb-2'>例）windows?</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>window</span>
                                <span>windows</span>
                            </p>
                            <p>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>windou</span>
                                <span>windo</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>??</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>?の最短マッチver</h3>
                            <p className='mb-2'>例）.??b</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block mr-2'><span className='text-pink-500'>最短</span>マッチ</span>
                                <span className='inline-block mr-4'><span className='text-pink-500'>b</span>bb</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block mr-2'><span className='text-blue-500'>最長</span>マッチ（?）</span>
                                <span className='inline-block mr-4'><span className='text-blue-500'>bb</span>b</span>
                                <span></span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>[ ]</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>指定した文字の中のどれか1つ</h3>
                            <p className='mb-2'>例）好きな数字は[0-9]です</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>好きな数字は6です</span>
                                <span>好きな数字は3です</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>好きな数字は12です</span>
                                <span>好きな数字は三です</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>[^ ]</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>指定した文字以外</h3>
                            <p className='mb-2'>例）信号が[^赤黄青]色です</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>信号が紫色です</span>
                                <span>信号が緑色です</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>信号が赤色です</span>
                                <span>信号が青色です</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>^</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>行の先頭で一致</h3>
                            <p className='mb-2'>例）^ありがとう</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>ありがとうございます</span>
                                <span>ありがとうを言うのは大事</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>今日はありがとう</span>
                                <span>いつもありがとう</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>$</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>行の末尾で一致</h3>
                            <p className='mb-2'>例）ありがとう$</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>掃除をしてくれてありがとう</span>
                                <span>ご飯を作ってくれてありがとう</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>ありがとうございます</span>
                                <span>ありがとうね</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>( )</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>グループ化</h3>
                            <p className='mb-2'>例）私は(英語|数学|国語)が好きです</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>私は英語が好きです</span>
                                <span>私は国語が好きです</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>私は理科が好きです</span>
                                <span>私は社会が好きです</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>\</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>直前のメタ文字をエスケープする</h3>
                            <p className='mb-2'>例）\[A-Z\]</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>[A-Z]</span>
                                <span></span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>A</span>
                                <span>C</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>{'{'}n{'}'}</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>直前の文字をn回繰り返す</h3>
                            <p className='mb-2'>例）[0-9]{'{'}3{'}'}</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>123</span>
                                <span>551</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>abc</span>
                                <span>2023</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>{'{'}n,{'}'}</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>直前の文字をn回以上繰り返す</h3>
                            <p className='mb-2'>例）[0-9]{'{'}3,{'}'}</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>123</span>
                                <span>0123456789</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>0</span>
                                <span>afjeriof</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>{'{'}n, m{'}'}</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>直前の文字をn回〜m回繰り返す</h3>
                            <p className='mb-2'>例）[0-9]{'{'}3, 5{'}'}</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>1234</span>
                                <span>54321</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>123456</span>
                                <span>1</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>\d</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>数字1文字 （[0-9]と同じ）</h3>
                            <p className='mb-2'>例）\d文字</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>3文字</span>
                                <span>8文字</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>五文字</span>
                                <span>千文字</span>
                            </p>
                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>\w</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>英数字1文字 （[a-zA-Z0-9_]と同じ）</h3>
                            <p className='mb-2'>例）\w年\w組</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>1年A組</span>
                                <span>B年3組</span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>.年!組</span>
                                <span>三年二組</span>
                            </p>

                        </div>
                    </div>

                    <div className='sm:w-49 w-full flex p-4 border-b border-gray-400'>
                        <div className='w-1/4'>
                            <h2 className='text-gray-800 bg-white w-16 h-16 rounded-lg text-2xl flex justify-center items-center font-semibold'>\s</h2>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='mb-3 text-black font-semibold'>空白文字</h3>
                            <p className='mb-2'>例）赤\s青\s黃</p>
                            <p className='text-sm mb-1'>
                                <span className='inline-block text-pink-500 mr-2'>○</span>
                                <span className='inline-block mr-4'>赤 青 黃</span>
                                <span></span>
                            </p>
                            <p className='text-sm'>
                                <span className='inline-block text-blue-500 mr-2'>✗</span>
                                <span className='inline-block mr-4'>赤青黃</span>
                                <span>赤,青,黃</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App
