var dataSet = [
  [
    "Tiger Nixon",
    "@tigernixon",
    "chia:did:17va5jtppwy0599q69tdte0fvqsl8d6c8phsn2r4vrs36znjjh00s5vql7c",
    "tigernixon.com",
    "verified",
  ],
  [
    "Garrett Winters",
    "@winters",
    "chia:did:mg8ncrlhkz9a48x5rmptplhhsn9m7fsslvfep39mnukgwdgwq46s0e9820",
    "wintersprojecturl.com",
    "verified",
  ],
  [
    "Jason",
    "@jason",
    "chia:did:cgj8g2cgkdpm50ewakjvvxz78fpcjmvs496qzxd9u8f7wnqsue4s5kzzrd",
    "jasonsprojecturl.com, multipleurl.com",
    "pending",
  ],
  [
    "scotopic",
    "@scotopic",
    "did:chia:1wm5sxf3kv24wng5ttmgea7f0j64ex44yey9ae57ex6d66r5ktr4qvr28tp",
    "scotopic.xyz",
    "verified",
  ],
  [
    "Joseph Holiday",
    "@homefortheholidays",
    "chia:did:ux0yy95z2yj6jgc8sk4qpvke08a2dygg3zgpf9ajws4ehx0ccpjsffqr78",
    "wintersprojecturl.com",
    "pending",
  ],
];

$(document).ready(function () {
  $("#example").DataTable({
    data: dataSet,
    columns: [
      { title: "Nickname" },
      { title: "Twitterhandle" },
      { title: "ChiaDID" },
      { title: "Project(s)" },
      { title: "Status" },
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
