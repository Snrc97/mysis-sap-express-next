import clsx from 'clsx'
import Image from 'next/image'

export default function HeroCover({
  src,
  alt,
  className,
  children,
}: {
  src: string
  alt: string
  className?: string
  children?: any;
}) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        className={clsx("object-cover w-full h-full mt-16", className)}
        width={1080}
        height={1920}
        priority
      />
      {children}
    </div>
  )
}
