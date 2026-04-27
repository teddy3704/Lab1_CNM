"use server";

import { z } from "zod";

const projectTypeValues = ["portfolio", "landing", "dashboard", "lab"] as const;
const vibeValues = ["editorial", "technical", "warm", "bold"] as const;
const audienceValues = ["instructor", "recruiter", "client", "team"] as const;
const priorityValues = ["wow", "clarity", "conversion", "demo"] as const;
const timelineValues = ["rush", "balanced", "extended"] as const;

type ProjectType = (typeof projectTypeValues)[number];
type ProjectVibe = (typeof vibeValues)[number];
type ProjectAudience = (typeof audienceValues)[number];
type ProjectPriority = (typeof priorityValues)[number];
type ProjectTimeline = (typeof timelineValues)[number];
type FieldName =
  | "name"
  | "email"
  | "projectType"
  | "vibe"
  | "audience"
  | "priority"
  | "timeline"
  | "note";

type ProjectMetric = {
  label: string;
  value: string;
  note: string;
};

type ProjectSection = {
  title: string;
  detail: string;
};

type ProjectBlueprint = {
  headline: string;
  summary: string;
  architecture: string;
  palette: string;
  stack: string[];
  sprint: string;
  aiWorkflow: string;
  nextStep: string;
  audience: string;
  priority: string;
  risk: string;
  cta: string;
  scorecard: ProjectMetric[];
  sections: ProjectSection[];
};

export type ProjectBriefState = {
  status: "idle" | "error" | "success";
  message: string;
  fieldErrors: Partial<Record<FieldName, string>>;
  blueprint: ProjectBlueprint | null;
};

const projectTypes: Record<ProjectType, { label: string; architecture: string; stack: string[] }> = {
  portfolio: {
    label: "portfolio ca nhan",
    architecture:
      "Mo bang hero co dau an ca nhan, theo sau boi cac tang proof ngắn, project highlights va CTA lien he duoc dat ro o cuoi trang.",
    stack: ["App Router", "Metadata API", "Responsive content blocks"],
  },
  landing: {
    label: "landing page san pham",
    architecture:
      "Hero ban thong diep, khoi loi ich, tang tin cay va form chuyen doi co validation tu server de tao cam giac san pham san sang demo.",
    stack: ["Server Components", "Structured sections", "Conversion-focused CTA"],
  },
  dashboard: {
    label: "dashboard noi bo",
    architecture:
      "Sidebar dinh huong, overview metrics, bang du lieu theo module va mot lop hanh dong duoc bo tri theo muc do uu tien su dung.",
    stack: ["Nested layout", "Data panels", "Action-oriented UI"],
  },
  lab: {
    label: "project hoc thuat",
    architecture:
      "Mo dau bang boi canh de tai, tiep theo la process timeline, ket qua, metadata proof va mot khoi tong ket ki thuat de de thuyet trinh.",
    stack: ["Narrative sections", "Process timeline", "Presentation-ready layout"],
  },
};

const vibes: Record<ProjectVibe, { label: string; palette: string; aiWorkflow: string }> = {
  editorial: {
    label: "editorial",
    palette:
      "Nen giay am, tieu de lon, contrast ro va khoang trang duoc tinh toan de tao nhip doc co tinh bien tap.",
    aiWorkflow:
      "Dung AI de mo rong y tuong layout, sau do tu tay chon lai hierarchy, cap do nhan manh va copy de giu ban sac ca nhan.",
  },
  technical: {
    label: "ky thuat",
    palette:
      "Tong mau sach, module canh le ro, emphasis vao readability va kha nang scan nhanh.",
    aiWorkflow:
      "Dung AI de tong hop yeu cau, bo cuc thong tin va checklist hoan thien truoc khi polish visual.",
  },
  warm: {
    label: "am ap",
    palette:
      "Sac do dat, kem va xanh tram de giao dien de tiep can nhung van giu chieu sau thi giac.",
    aiWorkflow:
      "Dung AI de tao cac bien the copy va CTA, sau do can bang lai nhiet do thuong hieu trong giao dien.",
  },
  bold: {
    label: "manh",
    palette:
      "Khoi hero lon, call-to-action dam, contrast cao va nhan manh vao mot thong diep trung tam khong bi tan man.",
    aiWorkflow:
      "Dung AI de thu nhieu huong hero section nhanh, nhung chot mot concept duy nhat de tranh loang nhan dien.",
  },
};

const audiences: Record<
  ProjectAudience,
  { label: string; summary: string; proof: string; cta: string }
> = {
  instructor: {
    label: "giang vien / hoi dong",
    summary: "quy trinh, lap luan va bang chung fullstack ro rang",
    proof:
      "Can mot lop proof ro de giang vien thay project dat yeu cau: metadata day du, custom states va mot Server Action co output typed.",
    cta:
      "Dong trang bang mot tong ket ngan giai thich ro bai nop da ket hop duoc giao dien, process va implementation nhu the nao.",
  },
  recruiter: {
    label: "recruiter / nha tuyen dung",
    summary: "kha nang scan nhanh nang luc va cach ban to chuc san pham",
    proof:
      "Nen day stack, capability cards va ket qua server-side len lop doc som de nguoi xem co the danh gia nang luc chi trong vai chuc giay dau.",
    cta:
      "Ket thuc bang call-to-action gon, kem GitHub va ghi chu trien khai de impression chuyen nghiep hon mot bai nop thong thuong.",
  },
  client: {
    label: "khach hang tiem nang",
    summary: "thong diep ro, loi ich ro va cam giac san pham da san sang trinh bay",
    proof:
      "Can bien brief generator thanh mot demo value: nguoi xem thay duoc cach input duoc bien thanh giai phap va ke hoach trien khai ngan gon.",
    cta:
      "Ket trang bang mot next step mang tinh hop tac: chot scope, timeline va buoc ban tiep theo sau buoi review.",
  },
  team: {
    label: "noi bo team",
    summary: "architecture, scope sprint va cach cac phan giao dien noi voi logic",
    proof:
      "Nen tach ro content lane, interaction lane va validation lane de ca team cung thay duoc pham vi va cach chia viec.",
    cta:
      "Dong goi output theo dang backlog nho: viec can lam tiep, rui ro can quan sat va muc tieu demo cua sprint.",
  },
};

const priorities: Record<ProjectPriority, { label: string; direction: string; risk: string }> = {
  wow: {
    label: "an tuong thi giac",
    direction: "Tang trong so cho hero, contrast va khoang trang lon de tao hieu ung ngay tu lan nhin dau.",
    risk: "Neu khong ky luat, cac khoi trang tri co the tranh nhau su chu y va lam loang thong diep.",
  },
  clarity: {
    label: "ro cau truc",
    direction: "Cho moi section mot vai tro doc ro va de thong tin scan nhanh tren desktop lan mobile.",
    risk: "Neu toi gian qua muc, project co the mat diem nhan cam xuc va tro nen qua an toan.",
  },
  conversion: {
    label: "thong diep / CTA",
    direction: "Sap xep proof point, benefit va hanh dong tiep theo theo mot luong doc rat co chu dich.",
    risk: "Can giu copy ngan va chot mot CTA chinh, neu khong nguoi xem se mat diem dung quyet dinh.",
  },
  demo: {
    label: "kha nang demo",
    direction: "Tap trung vao scope chac, state ro va nhung thao tac co the trinh bay ngay truoc lop hoac reviewer.",
    risk: "Can cat bot cac khoi khong phuc vu ban demo de tranh qua tai va giam do on dinh.",
  },
};

const timelines: Record<ProjectTimeline, { label: string; sprint: string; pace: string }> = {
  rush: {
    label: "48 gio de demo",
    sprint:
      "Ngay 1 chot structure, visual direction va data flow; ngay 2 polish component, metadata va kiem tra build de san sang demo.",
    pace: "Scope gon, quyet dinh nhanh va uu tien nhung gi trinh bay duoc ngay.",
  },
  balanced: {
    label: "1 tuan de hoan thien",
    sprint:
      "Pha 1 wireframe va content; pha 2 component system; pha 3 polish motion, metadata va nghiem thu tren trinh duyet.",
    pace: "Can bang giua chat luong trinh bay va do chuan ky thuat.",
  },
  extended: {
    label: "2 tuan de polish",
    sprint:
      "Co du thoi gian de test nhieu visual direction, them lat cat fullstack, refactor component va toi uu trinh bay cho demo cuoi.",
    pace: "Cho phep polish sau hon va thu nghiem nhieu bien the truoc khi chot.",
  },
};

const vibeMetrics: Record<ProjectVibe, { visual: number; structure: number }> = {
  editorial: { visual: 90, structure: 84 },
  technical: { visual: 80, structure: 93 },
  warm: { visual: 86, structure: 85 },
  bold: { visual: 94, structure: 79 },
};

const priorityMetricBoost: Record<
  ProjectPriority,
  { visual: number; structure: number; demo: number }
> = {
  wow: { visual: 5, structure: -1, demo: 1 },
  clarity: { visual: 0, structure: 5, demo: 2 },
  conversion: { visual: 2, structure: 2, demo: 3 },
  demo: { visual: 1, structure: 3, demo: 6 },
};

const timelineMetricBase: Record<ProjectTimeline, number> = {
  rush: 87,
  balanced: 91,
  extended: 95,
};

const projectBriefSchema = z.object({
  name: z.string().trim().min(2, "Nhap ten tu it nhat 2 ky tu."),
  email: z.string().trim().email("Nhap email hop le de brief co ngu canh ro rang."),
  projectType: z.string().refine(
    (value): value is ProjectType => projectTypeValues.includes(value as ProjectType),
    "Chon mot loai project cu the.",
  ),
  vibe: z.string().refine(
    (value): value is ProjectVibe => vibeValues.includes(value as ProjectVibe),
    "Chon mot huong thiet ke cho de xuat.",
  ),
  audience: z.string().refine(
    (value): value is ProjectAudience => audienceValues.includes(value as ProjectAudience),
    "Chon doi tuong review chinh de server dat dung trong tam.",
  ),
  priority: z.string().refine(
    (value): value is ProjectPriority => priorityValues.includes(value as ProjectPriority),
    "Chon mot uu tien chinh cho huong de xuat.",
  ),
  timeline: z.string().refine(
    (value): value is ProjectTimeline => timelineValues.includes(value as ProjectTimeline),
    "Chon timeline de server sinh plan phu hop.",
  ),
  note: z.string().trim().max(260, "Ghi chu ngan gon trong 260 ky tu de de tong hop."),
});

function formatScore(score: number) {
  const safeScore = Math.max(72, Math.min(98, score));

  return `${safeScore} / 100`;
}

function normalizeSentence(value: string) {
  return value.trim().replace(/[.!?]+$/g, "");
}

function createScorecard(
  vibe: ProjectVibe,
  priority: ProjectPriority,
  timeline: ProjectTimeline,
): ProjectMetric[] {
  const visualScore = vibeMetrics[vibe].visual + priorityMetricBoost[priority].visual;
  const structureScore = vibeMetrics[vibe].structure + priorityMetricBoost[priority].structure;
  const demoScore = timelineMetricBase[timeline] + priorityMetricBoost[priority].demo;

  return [
    {
      label: "Visual weight",
      value: formatScore(visualScore),
      note: "Do dam cua concept va kha nang tao an tuong o hero lan cac khoi chinh.",
    },
    {
      label: "System clarity",
      value: formatScore(structureScore),
      note: "Muc do de scan, de critique va de mo rong khi can them section moi.",
    },
    {
      label: "Demo readiness",
      value: formatScore(demoScore),
      note: timelines[timeline].pace,
    },
  ];
}

function createSections(
  project: ProjectType,
  vibe: ProjectVibe,
  audience: ProjectAudience,
  priority: ProjectPriority,
): ProjectSection[] {
  return [
    {
      title: "Opening thesis",
      detail:
        `Mo bang ${projectTypes[project].label} theo huong ${vibes[vibe].label}; ${priorities[priority].direction}`,
    },
    {
      title: "Proof layer",
      detail: audiences[audience].proof,
    },
    {
      title: "Interaction slice",
      detail:
        "Dat brief generator sau tang proof de nguoi xem chuyen tu doc sang thao tac va thay ngay gia tri cua luong server-side.",
    },
    {
      title: "Final handoff",
      detail: audiences[audience].cta,
    },
  ];
}

function toFieldErrors(error: z.ZodError) {
  const fieldErrors: Partial<Record<FieldName, string>> = {};

  for (const issue of error.issues) {
    const field = issue.path[0];

    if (typeof field === "string" && !(field in fieldErrors)) {
      fieldErrors[field as FieldName] = issue.message;
    }
  }

  return fieldErrors;
}

export async function createProjectBrief(
  _prevState: ProjectBriefState,
  formData: FormData,
): Promise<ProjectBriefState> {
  const rawInput = {
    name: typeof formData.get("name") === "string" ? formData.get("name") : "",
    email: typeof formData.get("email") === "string" ? formData.get("email") : "",
    projectType:
      typeof formData.get("projectType") === "string" ? formData.get("projectType") : "",
    vibe: typeof formData.get("vibe") === "string" ? formData.get("vibe") : "",
    audience: typeof formData.get("audience") === "string" ? formData.get("audience") : "",
    priority: typeof formData.get("priority") === "string" ? formData.get("priority") : "",
    timeline: typeof formData.get("timeline") === "string" ? formData.get("timeline") : "",
    note: typeof formData.get("note") === "string" ? formData.get("note") : "",
  };

  const validated = projectBriefSchema.safeParse(rawInput);

  if (!validated.success) {
    return {
      status: "error",
      message: "Server da nhan form nhung can ban bo sung lai mot vai truong.",
      fieldErrors: toFieldErrors(validated.error),
      blueprint: null,
    };
  }

  const { name, email, note } = validated.data;
  const projectType = validated.data.projectType as ProjectType;
  const vibe = validated.data.vibe as ProjectVibe;
  const audience = validated.data.audience as ProjectAudience;
  const priority = validated.data.priority as ProjectPriority;
  const timeline = validated.data.timeline as ProjectTimeline;

  const selectedProject = projectTypes[projectType];
  const selectedVibe = vibes[vibe];
  const selectedAudience = audiences[audience];
  const selectedPriority = priorities[priority];
  const selectedTimeline = timelines[timeline];
  const sections = createSections(projectType, vibe, audience, priority);
  const scorecard = createScorecard(vibe, priority, timeline);
  const normalizedNote = normalizeSentence(note);
  const summary =
    note.length > 0
      ? `Brief nay xoay quanh yeu cau: ${normalizedNote}. Server se xep de xuat theo huong uu tien ${selectedAudience.summary}.`
      : `Huong de xuat uu tien ${selectedAudience.summary}, dong thoi giu mot lat cat fullstack du ro de nang luc cua ${name} duoc thay thay vi chi duoc ke lai.`;

  return {
    status: "success",
    message: `Da sinh xong blueprint ${selectedVibe.label} / ${selectedPriority.label} cho ${name}.`,
    fieldErrors: {},
    blueprint: {
      headline: `${selectedProject.label} theo huong ${selectedVibe.label}`,
      summary,
      architecture: `${selectedProject.architecture} Truc review chinh nham vao ${selectedAudience.summary}.`,
      palette: `${selectedVibe.palette} ${selectedPriority.direction}`,
      stack: [
        ...selectedProject.stack,
        "Server Action + zod",
        `Timeline: ${selectedTimeline.label}`,
      ],
      sprint: selectedTimeline.sprint,
      aiWorkflow: selectedVibe.aiWorkflow,
      nextStep:
        `Buoc tiep theo: dung ${email} lam dau moi lien he, chot content outline 6 section, scaffold App Router va khoa scope theo nhip ${selectedTimeline.label}.`,
      audience: selectedAudience.label,
      priority: selectedPriority.label,
      risk: selectedPriority.risk,
      cta: selectedAudience.cta,
      scorecard,
      sections,
    },
  };
}