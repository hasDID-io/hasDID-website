var dataSet = [
  [
    "Tiger Nixon",
    "@tigetnixon",
    "ashejjl42h34h2lj3j4h2j3l4hj23lk4h",
    "myprojecturl.com",
  ],
  [
    "Garrett Winters",
    "@winters",
    "dkslfjdslkfdj32jlk34j2kl34jkl",
    "wintersprojecturl.com",
  ],
  ["Jason", "@jason", "dkslfjdslkfdj32jlk34j2kl34jkl", "jasonsprojecturl.com"],
  ["Liza300", "@sparta", "dkslfjdslkfdj32jlk34j2kl34jkl", "spartacturl.com"],
  [
    "Garrett Winters",
    "@winters",
    "dkslfjdslkfdj32jlk34j2kl34jkl",
    "wintersprojecturl.com",
  ],
];

$(document).ready(function () {
  $("#example").DataTable({
    data: dataSet,
    columns: [
      { title: "Nickname" },
      { title: "Twitterhandle" },
      { title: "Chiadid" },
      { title: "Project" },
    ],
  });
});

// var dataSet = [
//   {
//     nickname: "Tiger Nixon",
//     twitterhandle: "@tigetnixon",
//     chiadid: "ashejjl42h34h2lj3j4h2j3l4hj23lk4h",
//     project: "myprojecturl.com",
//   },
//   {
//     nickname: "Garrett Winters",
//     twitterhandle: "@winters",
//     chiadid: "dkslfjdslkfdj32jlk34j2kl34jkl",
//     project: "wintersprojecturl.com",
//   },
//   {
//     nickname: "Jason",
//     twitterhandle: "@jason",
//     chiadid: "dkslfjdslkfdj32jlk34j2kl34jkl",
//     project: "jasonsprojecturl.com",
//   },
//   {
//     nickname: "Liza300",
//     twitterhandle: "@sparta",
//     chiadid: "dkslfjdslkfdj32jlk34j2kl34jkl",
//     project: "spartacturl.com",
//   },
//   {
//     nickname: "Garrett Winters",
//     twitterhandle: "@winters",
//     chiadid: "dkslfjdslkfdj32jlk34j2kl34jkl",
//     project: "wintersprojecturl.com",
//     status: "wintersprojecturl.com",
//   },
// ];
