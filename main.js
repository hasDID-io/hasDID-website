var dataSet = [
  {
    nickname: "Tiger Nixon",
    twitterhandle: "@tigetnixon",
    chiadid: "ashejjl42h34h2lj3j4h2j3l4hj23lk4h",
    project: "myprojecturl.com",
  },
  {
    nickname: "Garrett Winters",
    twitterhandle: "@winters",
    chiadid: "dkslfjdslkfdj32jlk34j2kl34jkl",
    project: "wintersprojecturl.com",
  },
  {
    nickname: "Jason",
    twitterhandle: "@jason",
    chiadid: "dkslfjdslkfdj32jlk34j2kl34jkl",
    project: "jasonsprojecturl.com",
  },
  {
    nickname: "Liza300",
    twitterhandle: "@sparta",
    chiadid: "dkslfjdslkfdj32jlk34j2kl34jkl",
    project: "spartacturl.com",
  },
  {
    nickname: "Garrett Winters",
    twitterhandle: "@winters",
    chiadid: "dkslfjdslkfdj32jlk34j2kl34jkl",
    project: "wintersprojecturl.com",
  },
];

$(document).ready(function () {
  $("#example").DataTable({
    data: dataSet,
    columns: [
      { data: "nickname" },
      { data: "twitterhandle" },
      { data: "chiadid" },
      { data: "project" },
    ],
  });
});
