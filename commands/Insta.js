import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `قم بإرسال رابط من الانستجرام لتحميله`;
  m.reply(wait);

  let res;
  try {
    res = await fetch(`${gurubot}/igdlv1?url=${text}`);
  } catch (error) {
    throw `حصل خطاء يرجاء المحاوله لاحقا: ${error.message}`;
  }

  let api_response = await res.json();

  if (!api_response || !api_response.data) {
    throw `لم يتم العثور على فيديو أو صورة أو استجابة غير صالحة من واجهة برمجة التطبيقات.`;
  }

  const mediaArray = api_response.data;

  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type;
    const mediaURL = mediaData.url_download;

    let cap = `تم التحميل ${mediaType.toUpperCase()} >,<`;

    if (mediaType === 'video') {
      
      conn.sendFile(m.chat, mediaURL, 'instagram.mp4', cap, m);
    } else if (mediaType === 'image') {
      
      conn.sendFile(m.chat, mediaURL, 'instagram.jpg', cap, m);
    }
  }
};

handler.help = ['instagram'];
handler.tags = ['downloader'];
handler.command = /^(instagram|انستا|ig|insta)$/i;

export default handler;
