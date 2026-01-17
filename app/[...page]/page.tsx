import { builder } from '@builder.io/sdk';
import { BuilderComponent } from '@builder.io/react';
import { notFound } from 'next/navigation';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Page({
  params,
}: {
  params: { page?: string[] };
}) {
  const urlPath = '/' + (params.page?.join('/') || '');

  const content = await builder
    .get('page', {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise();

  if (!content) {
    notFound();
  }

  return (
    <BuilderComponent model="page" content={content}>
      {/* required children */}
    </BuilderComponent>
  );
}
