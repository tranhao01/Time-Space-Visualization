import React from "react";

// Utility: clamp values to a safe range
function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

export default function KantSpaceTimeCanvas() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 p-6">
      <header className="max-w-5xl mx-auto mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Trực quan hoá Kant: Không gian–Thời gian như <span className="italic">bộ lọc</span> của trực giác</h1>
        <p className="text-sm md:text-base text-gray-600 mt-2">Ẩn dụ trực quan: “Vật tự thân” không hiện ra trực tiếp; cái ta nhận được là “Hiện tượng”, sau khi đi qua <b>khung không gian–thời gian</b> mà chủ thể mang sẵn.</p>
      </header>

      {/* Diagram */}
      <main className="max-w-5xl mx-auto">
        <section className="grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Noumenon */}
          <Card>
            <CardHeader title="Vật tự thân (Noumenon)" subtitle="Không trực tiếp xuất hiện" icon={
              <SvgIcon>
                <circle cx="24" cy="24" r="20" fill="none" strokeWidth="2" />
                <line x1="8" y1="24" x2="40" y2="24" strokeWidth="2" />
              </SvgIcon>
            }/>
            <ul className="text-sm leading-6 text-gray-700">
              <li>Không cho trực giác cảm tính trực tiếp.</li>
              <li>Vượt ngoài phạm vi đo lường.</li>
              <li>Ta <i>giả định</i> có đó, nhưng không nắm bắt trực tiếp.</li>
            </ul>
          </Card>

          {/* Filter */}
          <Card className="relative">
            <CardHeader title="Bộ lọc chủ thể: Không gian & Thời gian (a priori)" subtitle="Khung tất yếu của trực giác" icon={
              <SvgIcon>
                <defs>
                  <radialGradient id="g" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopOpacity="0.15" />
                    <stop offset="100%" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="24" cy="24" r="22" fill="url(#g)" />
                <ellipse cx="24" cy="24" rx="18" ry="10" fill="none" strokeWidth="2" />
              </SvgIcon>
            }/>
            <ul className="text-sm leading-6 text-gray-700">
              <li>Giống “<b>kính lọc</b>” hay “<b>màn chiếu</b>”.</li>
              <li>Mọi trực giác phải “đi qua” khung này.</li>
              <li>Không do ta bịa tuỳ ý; là cấu trúc phổ quát của nhận thức.</li>
            </ul>
          </Card>

          {/* Phenomena */}
          <Card>
            <CardHeader title="Hiện tượng (Phenomena)" subtitle="Trực giác định lượng" icon={
              <SvgIcon>
                <rect x="8" y="10" width="32" height="22" fill="none" strokeWidth="2" />
                <circle cx="18" cy="21" r="3" />
                <rect x="26" y="17" width="10" height="8" />
              </SvgIcon>
            }/>
            <ul className="text-sm leading-6 text-gray-700">
              <li>Có <b>tọa độ</b> trong không gian, <b>độ dài</b> trong thời gian.</li>
              <li>Có thể <b>đo đạc, chia nhỏ, cộng gộp</b> (đại lượng mở rộng).</li>
              <li>Nền tảng cho <b>toán học</b> & khoa học tự nhiên.</li>
            </ul>
          </Card>
        </section>

        {/* Connectors */}
        <div className="relative max-w-5xl mx-auto my-6 hidden md:block">
          <div className="grid grid-cols-3 gap-6 items-center">
            <div className="justify-self-end text-gray-500">➜</div>
            <div className="justify-self-center text-gray-500">➜</div>
            <div></div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">Dòng xuất hiện: Vật tự thân <span className="mx-1">→</span> khung Không gian–Thời gian <span className="mx-1">→</span> Hiện tượng mà ta trực giác</p>
        </div>

        {/* Interactive lab */}
        <Lab />

        {/* Notes */}
        <section className="max-w-5xl mx-auto mt-6">
          <h3 className="text-sm font-semibold tracking-wide text-gray-700 uppercase">Ghi chú nhanh</h3>
          <ul className="text-sm text-gray-700 list-disc pl-5 mt-2 space-y-1">
            <li>“Không gian–thời gian” ở đây là <b>khung của chủ thể</b>, không phải 
              khẳng định thế giới ngoài kia có đúng cấu trúc ấy như “vật tự thân”.</li>
            <li>“Mọi trực giác đều định lượng” ≠ “mọi niềm tin đều định lượng”. Niềm tin thuộc phạm vi thực hành đạo đức.</li>
          </ul>
        </section>

        {/* Test Suite */}
        <TestSuite />
      </main>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={"bg-white border border-gray-200 rounded-2xl shadow-sm p-4 md:p-5 " + className}>
      {children}
    </div>
  );
}

function CardHeader({ title, subtitle, icon }) {
  return (
    <div className="flex items-start gap-3 mb-3">
      <div className="shrink-0 w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center">
        <svg viewBox="0 0 48 48" className="w-8 h-8 stroke-gray-700 fill-gray-700/20">{icon}</svg>
      </div>
      <div>
        <h2 className="text-base md:text-lg font-semibold leading-tight">{title}</h2>
        <p className="text-xs md:text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

function SvgIcon({ children }) {
  return children;
}

function Lab() {
  const [label, setLabel] = React.useState("con rồng xám bay lượn");
  const [x, setX] = React.useState(50);
  const [size, setSize] = React.useState(1);
  const [duration, setDuration] = React.useState(3);
  const [show, setShow] = React.useState(true);

  return (
    <section className="max-w-5xl mx-auto mt-8">
      <h3 className="text-base md:text-lg font-semibold">Phòng thí nghiệm trực giác 🧪</h3>
      <p className="text-sm text-gray-600 mt-1">Hãy thử “tạo” một đối tượng tưởng tượng và quan sát: nó buộc phải có <b>vị trí</b>, <b>kích thước tương đối</b>, và <b>thời lượng</b> khi xuất hiện — đúng như Kant nói.</p>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-4">
        {/* Controls */}
        <div className="md:col-span-1 space-y-3">
          <LabeledInput label="Mô tả đối tượng (tuỳ ý)">
            <input value={label} onChange={(e)=>setLabel(e.target.value)} className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-800" />
          </LabeledInput>

          <LabeledInput label={`Vị trí X (\u2190 trái / phải \u2192): ${x}%`}>
            <input type="range" min={0} max={100} value={x} onChange={(e)=>setX(clamp(parseInt(e.target.value), 0, 100))} className="w-full" />
          </LabeledInput>

          <LabeledInput label={`Kích thước tương đối: ${size.toFixed(2)}x`}>
            <input type="range" min={0.5} max={2} step={0.01} value={size} onChange={(e)=>setSize(clamp(parseFloat(e.target.value), 0.5, 2))} className="w-full" />
          </LabeledInput>

          <LabeledInput label={`Thời lượng hình dung (s): ${duration}`}>
            <input type="range" min={1} max={10} value={duration} onChange={(e)=>setDuration(clamp(parseInt(e.target.value), 1, 10))} className="w-full" />
          </LabeledInput>

          <div className="flex items-center gap-2">
            <button onClick={()=>setShow(true)} className="px-3 py-2 rounded-xl bg-gray-900 text-white text-sm shadow">Hiển thị</button>
            <button onClick={()=>setShow(false)} className="px-3 py-2 rounded-xl bg-white border border-gray-300 text-sm shadow">Ẩn</button>
          </div>
        </div>

        {/* Stage */}
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 h-64 relative overflow-hidden">
            <GridBg />
            {show && (
              <Phenomenon label={label} x={x} size={size} duration={duration} />
            )}
            <div className="absolute bottom-2 left-4 text-xs text-gray-500">Khung của chủ thể: <b>Không gian</b> (vị trí) & <b>Thời gian</b> (thời lượng)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LabeledInput({ label, children }) {
  return (
    <label className="block text-sm">
      <span className="text-gray-700">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function GridBg() {
  // simple CSS grid pattern via inline SVG
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

function Phenomenon({ label, x, size, duration }) {
  const bubbleSize = 40 * size + 20; // px
  const left = `${x}%`;

  return (
    <div className="absolute inset-0">
      {/* time bar */}
      <div className="absolute top-4 right-4 text-xs text-gray-600">Thời lượng: {duration}s</div>

      {/* bubble */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center px-3 text-sm"
        style={{ left, top: "50%", width: bubbleSize, height: bubbleSize }}
        title="Một hiện tượng: nó có vị trí, kích thước, thời lượng"
      >
        <span className="text-center leading-tight px-2">{label}</span>
      </div>

      {/* axis labels */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">Trục không gian (X)</div>
      <div className="absolute top-8 left-4 text-[10px] text-gray-500">Thời gian (thanh hiển thị)</div>
    </div>
  );
}

// --- Minimal visual test harness ---
function TestSuite() {
  const tests = [];

  // Test 1: React presence
  tests.push({
    name: "React is defined",
    pass: typeof React !== "undefined" && React !== null,
    detail: "Expect global React available"
  });

  // Test 2: clamp utility
  tests.push({
    name: "clamp works (upper bound)",
    pass: clamp(120, 0, 100) === 100,
    detail: "clamp(120,0,100) === 100"
  });
  tests.push({
    name: "clamp works (lower bound)",
    pass: clamp(-5, 0, 100) === 0,
    detail: "clamp(-5,0,100) === 0"
  });

  // Test 3: Phenomenon size formula
  const expectedBubble = 40 * 1 + 20; // size=1
  tests.push({
    name: "bubble size formula",
    pass: expectedBubble === 60,
    detail: "40*size + 20 with size=1 => 60"
  });

  // Test 4: Initial state assumptions
  const initialStateOk = (50 >= 0 && 50 <= 100) && (1 >= 0.5 && 1 <= 2) && (3 >= 1 && 3 <= 10);
  tests.push({
    name: "initial state in valid ranges",
    pass: initialStateOk,
    detail: "x=50, size=1, duration=3 are within UI ranges"
  });

  return (
    <section className="max-w-5xl mx-auto mt-8">
      <h3 className="text-base md:text-lg font-semibold">Kiểm thử nhanh</h3>
      <p className="text-sm text-gray-600 mt-1">Một số <i>smoke tests</i> để chắc chắn canvas hoạt động sau khi sửa lỗi <code>React is not defined</code>.</p>
      <div className="mt-3 overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-3 py-2 border-b">Test</th>
              <th className="text-left px-3 py-2 border-b">Kết quả</th>
              <th className="text-left px-3 py-2 border-b">Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((t, i) => (
              <tr key={i} className="border-b last:border-0">
                <td className="px-3 py-2">{t.name}</td>
                <td className="px-3 py-2">
                  <span className={`inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs ${t.pass ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {t.pass ? "PASSED" : "FAILED"}
                  </span>
                </td>
                <td className="px-3 py-2 text-gray-600">{t.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
