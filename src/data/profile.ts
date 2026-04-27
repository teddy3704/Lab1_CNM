export const profile = {
  name: "Phan Văn Tiến",
  studentId: "2212472",
  className: "CTK46PM",
  github: "teddy3704",
  course: "Cong nghe moi trong phat trien phan mem",
  tagline: "Design nhu mot editorial piece, xay dung nhu mot fullstack product slice.",
  summary:
    "Muc tieu cua project nay la trinh bay bai lab theo cach mot studio giao dien van hanh: co hierarchy ro, co system design, va co mot luong server-side that su tra ve gia tri thay vi dung lai o phan demo tinh nang be mat.",
  intro:
    "Toi xem bai nop nay nhu mot buoi critique thu nho: moi section can tra loi duoc vi sao no ton tai, vi sao no dep, va vi sao no de mo rong neu duoc bien thanh mot san pham that.",
  hobbies:
    "Xay dung giao dien web co logic thi giac, nghien cuu cong nghe moi va tim cach toi uu quy trinh hoc lap trinh bang cong cu AI.",
  direction:
    "Phat trien tu duy lam san pham web vung hon: frontend co ban sac, backend co ly do, va quy trinh lam viec co kha nang giai thich lai cho giang vien hoac nha tuyen dung.",
};

export const skills = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Zod",
  "ESLint",
  "GitHub Copilot",
];

export const quickFacts = [
  {
    label: "Mon hoc",
    value: profile.course,
  },
  {
    label: "Nang luc trinh bay",
    value: "Editorial storytelling + content hierarchy",
  },
  {
    label: "Nen tang ky thuat",
    value: "Next.js 16 App Router / React 19",
  },
  {
    label: "Diem fullstack",
    value: "Server Action brief generator co validation",
  },
];

export const studioStats = [
  {
    value: "04",
    label: "reading layers",
    detail: "Hero, critique board, system section va server brief duoc xep thanh cac lop doc ro rang.",
  },
  {
    value: "16",
    label: "Next.js release",
    detail: "Dung App Router, metadata routes va Server Actions theo convention hien tai.",
  },
  {
    value: "01",
    label: "fullstack proof",
    detail: "Form gui du lieu len server, validate bang zod va tra blueprint typed ve client.",
  },
];

export const labLens = [
  {
    title: "Hierarchy that teaches",
    description:
      "Tieu de lon, section label va khoang trang duoc sap dat de nguoi xem hieu logic cua bai nop ngay tu lan quet dau tien.",
    accent: "orange",
  },
  {
    title: "Systemic styling",
    description:
      "Radius, shadow, border va palette lap lai nhu mot he thong, giup giao dien co nhip va de nang cap tiep ma khong vo ngon ngu thi giac.",
    accent: "sky",
  },
  {
    title: "Proof over promise",
    description:
      "Thay vi chi noi rang biet fullstack, project dua ra mot lat cat server-side co ket qua, pending state va validation ro rang.",
    accent: "slate",
  },
] as const;

export const readinessChecklist = [
  {
    label: "Presentation",
    value: "Metadata, sitemap, robots va trang 404 rieng.",
  },
  {
    label: "Interaction",
    value: "Server Action, pending state, validation va output co cau truc.",
  },
  {
    label: "Responsive",
    value: "Grid lon, cards co hierarchy va focus ring de demo tren nhieu kich thuoc man hinh.",
  },
  {
    label: "Delivery",
    value: "Lint va build duoc chay lai truoc khi xem nhu san sang nop bai.",
  },
];

export const goals = [
  "Chuyen mot bai lab thanh mot bo trinh bay co kha nang thuyet phuc o ca tang giao dien lan ky thuat.",
  "Lam chu Next.js App Router theo convention moi, khong dua vao tho quen cu cua cac version truoc.",
  "Dung AI nhu mot cong cu tang toc cho research, content va iteration thay vi thay the quyet dinh thiet ke.",
  "Tao duoc mot luong fullstack nho nhung du thuyet phuc de giai thich voi giang vien hoac recruiter.",
];

export const milestones = [
  {
    title: "Dat bo khung chuan",
    description:
      "Khoi tao project voi Next.js, TypeScript, ESLint, Tailwind CSS va cau truc App Router de co mot nen tang sach ngay tu dau.",
  },
  {
    title: "Tai dinh nghia giao dien",
    description:
      "Bien homepage thanh mot editorial landing page co bo cuc, nhip doc va visual language ro rang hon mot bai lab thong thuong.",
  },
  {
    title: "Them luong server co y nghia",
    description:
      "Xay brief generator de form khong chi nhan input ma con tong hop thanh mot blueprint co the dung de ban tiep concept.",
  },
  {
    title: "Chot ban demo",
    description:
      "Cap nhat metadata, tai lieu, kiem tra lint/build va dam bao project san sang cho viec review hoac deploy.",
  },
];

export const workflow = [
  "Bat dau tu checklist bai lab, nhung chuyen no thanh mot de bai thiet ke co tieu chi trinh bay va tieu chi ky thuat song song.",
  "Tach du lieu ra khoi view de page co the duoc chinh nhu mot he thong thay vi mot file JSX keo dai.",
  "Dung typography, grid va contrast de tao thu tu doc; khong de moi card tranh nhau su chu y tren cung mot mat phang.",
  "Dat mot lat cat fullstack co du pending state, validate va ket qua tra ve typed de chung minh nang luc beyond static UI.",
  "Kiem tra lai bang lint, build va browser truoc khi xem day la mot deliverable co the dem di demo.",
  "De cac thao tac tai khoan ca nhan nhu push GitHub hay deploy sang mot buoc rieng de repo giu duoc tinh tai lap.",
];

export const designPrinciples = [
  {
    title: "Editorial hierarchy",
    description:
      "Section label dong vai tro nhu ghi chu bien tap, con tieu de va spacing se dan mat nguoi xem di qua tung tang noi dung theo mot quy luat ro rang.",
  },
  {
    title: "System before decoration",
    description:
      "Mau, radius va hieu ung duoc quy ve mot bo quy tac chung de trang dep hon nhung van de duy tri khi can mo rong them section hoac state moi.",
  },
  {
    title: "Fullstack in one screen",
    description:
      "Moi giao dien dep deu can mot diem chung minh; o day, do la mot form co xu ly server-side that su, khong chi la minh hoa mockup.",
  },
];

export const capabilityCards = [
  {
    title: "Visual Identity",
    description:
      "Su ket hop giua nen giay am, typography co do nang va diem nhan mau cho giao dien mot ca tinh ro hon cac mau landing page pho thong.",
    accent: "orange",
  },
  {
    title: "Frontend System",
    description:
      "Component duoc phan lop, content duoc tach ra file data va bo cuc responsive duoc tinh de doc tot tu mobile den desktop.",
    accent: "sky",
  },
  {
    title: "Server Logic",
    description:
      "Server Action validate, tong hop context va tra mot blueprint typed ve client de chung minh giao dien co ket noi voi logic that.",
    accent: "slate",
  },
] as const;

export const briefOptions = {
  projectTypes: [
    {
      value: "portfolio",
      label: "Portfolio ca nhan",
    },
    {
      value: "landing",
      label: "Landing page san pham",
    },
    {
      value: "dashboard",
      label: "Dashboard noi bo",
    },
    {
      value: "lab",
      label: "Project hoc thuat",
    },
  ],
  vibes: [
    {
      value: "editorial",
      label: "Editorial va ro nhan dien",
    },
    {
      value: "technical",
      label: "Ky thuat va mach lac",
    },
    {
      value: "warm",
      label: "Am ap va de tiep can",
    },
    {
      value: "bold",
      label: "Manh va huong hero",
    },
  ],
  audiences: [
    {
      value: "instructor",
      label: "Giang vien / hoi dong",
      description: "Can thay process, lap luan va bang chung fullstack ro rang.",
    },
    {
      value: "recruiter",
      label: "Recruiter / nha tuyen dung",
      description: "Can scan nhanh nang luc va thay duoc cach ban to chuc san pham.",
    },
    {
      value: "client",
      label: "Khach hang tiem nang",
      description: "Can thay thong diep, loi ich va muc do san sang de trình bay.",
    },
    {
      value: "team",
      label: "Noi bo team",
      description: "Can thay architecture, pham vi va cach thuc thi trong sprint.",
    },
  ],
  priorities: [
    {
      value: "wow",
      label: "Uu tien an tuong thi giac",
      description: "Tang suc hut cho hero, rhythm va contrast de tao an tuong ngay.",
    },
    {
      value: "clarity",
      label: "Uu tien ro cau truc",
      description: "Lam cho thong tin scan nhanh, de review va de thuyet trinh.",
    },
    {
      value: "conversion",
      label: "Uu tien thong diep / CTA",
      description: "Sap xep noi dung theo huong dan nguoi xem den mot hanh dong ro rang.",
    },
    {
      value: "demo",
      label: "Uu tien kha nang demo",
      description: "Tap trung scope, tinh on dinh va nhung gi co the trinh bay ngay.",
    },
  ],
  timelines: [
    {
      value: "rush",
      label: "48 gio de demo",
    },
    {
      value: "balanced",
      label: "1 tuan de hoan thien",
    },
    {
      value: "extended",
      label: "2 tuan de polish",
    },
  ],
};