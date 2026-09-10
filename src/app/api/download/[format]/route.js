import { readFile } from 'node:fs/promises';
import path from 'node:path';

const downloads = {
    docx: {
        filename: 't-ramachandran-cover-letter.docx',
        contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
    pdf: {
        filename: 't-ramachandran-cover-letter.pdf',
        contentType: 'application/pdf',
    },
};

export async function GET(request, { params }) {
    const { format } = await params;
    const download = downloads[format];

    if (!download) {
        return new Response('File not found', { status: 404 });
    }

    try {
        const file = await readFile(path.join(process.cwd(), 'public', 'downloads', download.filename));

        return new Response(file, {
            headers: {
                'Content-Type': download.contentType,
                'Content-Disposition': `attachment; filename="${download.filename}"`,
                'Cache-Control': 'no-store',
            },
        });
    } catch {
        return new Response('File not found', { status: 404 });
    }
}