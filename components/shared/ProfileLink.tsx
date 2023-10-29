import Image from 'next/image'
import Link from 'next/link'

interface ProfileLinkProps {
  imgUrl: string
  title: string
  href?: string
}

const ProfileLink = ({ imgUrl, title, href }: ProfileLinkProps) => {
  return (
    <div className="flex-center gap-1">
      <Image src={imgUrl} alt="icon" width={20} height={20} />

      {href ? (
        <Link
          href={href}
          target="_blanc"
          className="text-blue-500 parmagraph-medium"
        >
          {title}
        </Link>
      ) : (
        <p className="paragraph-medium text-dark400_light700">{title}</p>
      )}
    </div>
  )
}

export default ProfileLink
