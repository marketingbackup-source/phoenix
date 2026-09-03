"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";


export default function PostCard({
  post,
  basePath="/blogs",
}) {

  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className="
      group
      block
      rounded-4xl
      overflow-hidden
      border
      border-gray-200
      bg-white
      transition-all
      duration-500
      hover:-translate-y-2
      "
    >
      <div
        className="
        relative
        h-[225px]
        bg-gray-100
        overflow-hidden
        "
      >
        {post.featuredImage && (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
            "
          />
        )}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/50
          via-transparent
          to-transparent
          "
        />
      </div>

      <div className="p-6">
        <p className="text-gray-400 text-sm !mb-4">
          {new Date(post.publishedAt).toLocaleDateString(
            "en-US",
            {
              month:"long",
              day:"numeric",
              year:"numeric",
            }
          )}
        </p>

        <h3
          className="
          text-xl
          uppercase
          text-black
          leading-[1.3]
          !mb-6
          "
        >
          {post.title}
        </h3>

        <div className="flex items-center justify-between">
          <span
            className="
            text-sm
            uppercase
            tracking-[1px]
            text-[var(--color-red-1)]
            "
          >
            Read More
          </span>

          <span
            className="
            flex-center
            w-10
            h-10
            rounded-full
            bg-gray-100
            group-hover:bg-[var(--color-red-1)]
            group-hover:text-white
            transition-all
            duration-500
            "
          >
            <ArrowUpRight size={18}/>
          </span>
        </div>
      </div>
    </Link>
  );
}