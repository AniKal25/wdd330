const links = [
    {
      label: "Week 1 Notes",
      url: "week1/index.html"
      
    },

    {
      label: "Week 2 Notes",
      url: "week2/index.html"
      
    },

    {
      label: "Week 3 Notes",
      url: "week3/index.html"
      
    },

    {
      label: "Week 4 Notes",
      url: "week4/index.html"
      
    },

    {
      label: "Week 5 Notes",
      url: "week5/index.html"
      
    },

    {
      label: "Week 6 Notes",
      url: "week6/index.html"
      
    },

    {
      label: "Week 7 Notes",
      url: "week7/index.html"
      
    },

    {
      label: "Week 8 Notes",
      url: "week8/index.html"
      
    },

    {
      label: "Week 9 Notes",
      url: "week9/index.html"
      
    },
  ]

  let ol = document.getElementById("linksList");



for (let i=0; i < links.length; i++) {
    console.log(links)
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.textContent = links[i].label;
    a.setAttribute ("href", links[i].url)

    li.append(a);
    ol.append(li);
   
};