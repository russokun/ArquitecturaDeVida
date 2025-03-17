'use client'

import Image from 'next/image'

export default function CertificationBadges() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Image
          src="/imgs/common/img1.jpg"
          alt="Certificación"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <Image
          src="/imgs/common/img2.jpg"
          alt="Certificación"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <Image
          src="/imgs/common/img3.jpg"
          alt="Certificación"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <Image
          src="/imgs/common/img4.jpg"
          alt="Certificación"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <Image
          src="/imgs/common/img5.jpg"
          alt="Certificación"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  )
}