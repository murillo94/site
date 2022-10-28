import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge'
};

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Making a better web';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            fontSize: 32,
            fontWeight: 600
          }}
        >
          <svg
            fill="currentColor"
            width="6rem"
            height="6rem"
            viewBox="0 0 512 512"
          >
            <path d="M105 256.5V349h16V185h128v29h-97v135h16V229h81v120h16V229h79v120h16V214h-95v-29h126v164h16V164H105v92.5z" />
          </svg>
          <div style={{ marginTop: 5 }}>{title}</div>
        </div>
      ),
      {
        width: 1200,
        height: 630
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
}
