import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*هذا الامر يقوم بإنشاء صوره من مخيلتك الرجاء الكتابه باللغه الانجليزيه*\n\n*مثال*\n*◉ ${usedPrefix + command} Beautiful anime girl*\n*◉ ${usedPrefix + command} Elon Musk in pink output*`;

  try {
    m.reply('*جاري انشاء الصوره...*');

    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*قشل في انشاء الصوره*';
    }
  } catch {
    throw '*حدث خطاء في انشاء الصوره.*';
  }
};

handler.help = ['dalle'];
handler.tags = ['AI'];
handler.command = ['انشاء', 'gen', 'imagine', 'openai2'];
export default handler;
