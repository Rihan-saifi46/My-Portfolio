import { IconCloud } from "@/components/ui/icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css",
  "tailwindcss",
  "nodedotjs",
  "express",
  "nextdotjs",
  "vercel",
  "github",
  "mongoDB",
  "render"
]

export default function IconCloudDemo() {
const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/ffffff`
);


  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  )
}
