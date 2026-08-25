export function processVisaContent(html) {

  if (!html) {
    return {
      html:"",
      headings:[]
    };
  }


  const parser = new DOMParser();

  const doc = parser.parseFromString(
    html,
    "text/html"
  );


  const headings = [];


  const h2s = doc.querySelectorAll("h2");


  h2s.forEach((heading,index)=>{

    const text = heading.textContent.trim();

    const id =
      text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g,"-")
      .replace(/^-|-$/g,"");


    heading.id = id;


    headings.push({
      id,
      title:text,
      number:index + 1
    });

  });


  return {
    html:doc.body.innerHTML,
    headings
  };

}