# CTK46 - Lab 01

Project Next.js cho bai thuc hanh 1 mon "Cac cong nghe moi trong phat trien phan mem". San pham hien tai la mot editorial critique-style landing page gioi thieu sinh vien, ket hop metadata, typography co chu dich va mot fullstack brief generator chay bang Server Actions.

## Thong tin sinh vien

- Ho va ten: PhanVanTIen
- MSSV: 2212472
- Lop: CTK46PM
- GitHub: teddy3704

## Noi dung da hoan thien trong repo

- Landing page ca nhan voi cac khoi hero, critique board, capability matrix, build journey va submission readiness
- Thiet ke lai giao dien theo huong editorial voi visual hierarchy, font display, panel system va warm palette ro rang hon
- Tach du lieu ho so va site config de view de bao tri hon
- Metadata day du hon trong App Router layout
- Custom 404 page, `robots.txt` va `sitemap.xml` theo file convention cua Next.js
- Form `Project Brief` dung Server Action va `zod` de validate, cham diem nhanh va sinh creative blueprint tu server
- Cau hinh VS Code, ESLint va Tailwind CSS san sang cho quy trinh lam bai
- `npm run lint` va `npm run build` da chay thanh cong

## Cach chay du an

```bash
npm install
npm run dev
```

Mo http://localhost:3000 de xem giao dien.

## Kiem tra chat luong

```bash
npm run lint
npm run build
```

## Bien moi truong tuy chon

Neu deploy len domain that, hay tao bien `NEXT_PUBLIC_SITE_URL` theo mau trong `.env.example` de metadata, `robots.txt` va `sitemap.xml` sinh ra URL dung.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## Cau truc chinh

- `src/app/page.tsx`: Trang chu theo huong critique board / editorial landing page
- `src/app/actions.ts`: Server Action validate form va tong hop creative blueprint
- `src/app/layout.tsx`: Layout goc va metadata
- `src/app/not-found.tsx`: Trang 404 tuy chinh
- `src/app/robots.ts`: Sinh `robots.txt`
- `src/app/sitemap.ts`: Sinh `sitemap.xml`
- `src/components/project-brief-form.tsx`: Form fullstack hai cot va vung hien thi blueprint
- `src/data/profile.ts`: Du lieu giao dien, criteria critique va cac option cho brief form
- `src/data/site.ts`: Cau hinh metadata va site URL

## Cong nghe su dung

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Zod
- ESLint
- Git va GitHub

## Viec can lam ngoai repo

- Them SSH key vao GitHub
- Tao repository `ctk46-lab01` tren tai khoan `teddy3704`
- Push source code len remote repository
- Dang nhap `copilot` va `gemini` neu can trai nghiem qua terminal
