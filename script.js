function generateNotice() {
  const lawyerName = document.getElementById("lawyerName").value;
  const artistName = document.getElementById("artistName").value;
  const originalTitle = document.getElementById("originalTitle").value;
  const originalLink = document.getElementById("originalLink").value;
  const infringementLink = document.getElementById("infringementLink").value;
  const infringementTitle = document.getElementById("infringementTitle").value;
  const uploader = document.getElementById("uploader").value;
  const date = document.getElementById("date").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const signature = document.getElementById("signature").value;

  const noticeText = `
Subject: Copyright Infringement Notice

Dear YouTube Team,
I am ${lawyerName}, representative of "${artistName}", writing this to inform you about an infringement made on my copyrighted material on your platform. The original work is titled as "${originalTitle}", created by "${artistName}", which can also be viewed at: ${originalLink}.

Link of the video to be removed: ${infringementLink}

Infringing Video Details:
Title: ${infringementTitle}
Uploader: ${uploader}
Date: ${date}

I hereby state that:
1. I am the legitimate copyright owner of the material in question.
2. I believe, in good faith, that the material’s usage, as described in the complaint, is not authorized by the copyright owner, their agent, or the law.
3. This claim is made in accordance with the facts and, under penalty of perjury, I am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.

Contact info:
Email: ${email}
Address: ${address}
Phone: ${phone}
Electronic signature: ${signature}

Sincerely,
${lawyerName}
  `;
  document.getElementById("output").textContent = noticeText;
}

function copyToClipboard() {
  const text = document.getElementById("output").textContent;
  navigator.clipboard.writeText(text).then(() => {
      alert("Notice copied to clipboard!");
  });
}
