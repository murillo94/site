'use client';

import Link from 'next/link';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

const MdxComponents = {
  LinkNext: (props: React.ComponentProps<typeof Link>) => <Link {...props} />
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={MdxComponents} />;
}
