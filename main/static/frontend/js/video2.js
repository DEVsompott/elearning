//กดเลือกวิดีโอ เปอเซนต์ และห้ามกรอ
var videos = [
  {
    id: 1,
    name: "1.1 แนะนำเว็บแอปพลิเคชัน อพม.Smart",
    src: "../static/frontend/video/1.1 แนะนำเว็บแอปพลิเคชัน อพม.Smart.mp4",
    watched: 0,
  },
  {
    id: 2,
    name: "2.1 การเข้าสู่ระบบ",
    src: "../static/frontend/video/2.1 การเข้าสู่ระบบ.mp4",
    watched: 0,
  },
  {
    id: 3,
    name: "3.1 การยื่นคำร้องและการกดรับพิกัด GPS",
    src: "../static/frontend/video/3.1 การยื่นคำร้องและการกดรับพิกัด GPS.mp4",
    watched: 0,
  },
  {
    id: 4,
    name: "3.2 การกรอกประวัติผู้ประสบปัญหาทางสังคม",
    src: "../static/frontend/video/3.2 การกรอกประวัติผู้ประสบปัญหาทางสังคม.mp4",
    watched: 0,
  },
  {
    id: 5,
    name: "3.3 การกรอกที่อยู่ตามทะเบียนบ้าน",
    src: "../static/frontend/video/3.3 การกรอกที่อยู่ตามทะเบียนบ้าน.mp4",
    watched: 0,
  },
  {
    id: 6,
    name: "3.4 การกรอกที่อยู่ปัจจุบัน",
    src: "../static/frontend/video/3.4 การกรอกที่อยู่ปัจจุบัน.mp4",
    watched: 0,
  },
  {
    id: 7,
    name: "3.5การเลือกประเภทผู้ขอรับบริการ",
    src: "../static/frontend/video/3.5การเลือกประเภทผู้ขอรับบริการ.mp4",
    watched: 0,
  },
  {
    id: 8,
    name: "3.6 การเลือกสภาพปัญหาความเดือดร้อนที่พบ",
    src: "../static/frontend/video/3.6 การเลือกสภาพปัญหาความเดือดร้อนที่พบ.mp4",
    watched: 0,
  },
  {
    id: 9,
    name: "3.7 การเลือกเรื่องที่ขอรับความช่วยเหลือที่ต้องการ",
    src: "../static/frontend/video/3.7 การเลือกเรื่องที่ขอรับความช่วยเหลือที่ต้องการ.mp4",
    watched: 0,
  },
  {
    id: 10,
    name: "3.8 สิทธิสวัสดิการที่เคยได้รับ",
    src: "../static/frontend/video/3.8 สิทธิสวัสดิการที่เคยได้รับ.mp4",
    watched: 0,
  },
  {
    id: 11,
    name: "3.9 การรับรองข้อมูลส่วนบุคคล",
    src: "../static/frontend/video/3.9 การรับรองข้อมูลส่วนบุคคล.mp4",
    watched: 0,
  },
  {
    id: 12,
    name: "3.10 การเยี่ยมบ้านและการแนบเอกสารเพิ่มเติม",
    src: "../static/frontend/video/3.10 การเยี่ยมบ้านและการแนบเอกสารเพิ่มเติม.mp4",
    watched: 0,
  },
  {
    id: 13,
    name: "3.11 การยืนยันการบันทึกข้อมูล",
    src: "../static/frontend/video/3.11 การยืนยันการบันทึกข้อมูล.mp4",
    watched: 0,
  },
  {
    id: 14,
    name: "4.1 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับตำบล",
    src: "../static/frontend/video/4.1 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับตำบล.mp4",
    watched: 0,
  },
  {
    id: 15,
    name: "4.2 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับอำเภอ",
    src: "../static/frontend/video/4.2 การตรวจสอบและบันทึกข้อมูลสำหรับ อพม.ระดับอำเภอ.mp4",
    watched: 0,
  },
  {
    id: 16,
    name: "5.1 ความหมายของสถานะ",
    src: "../static/frontend/video/5.1 ความหมายของสถานะ.mp4",
    watched: 0,
  },
  {
    id: 17,
    name: "6.1 การสร้างทางลัด อพม.Smart ไว้บนหน้าจอหลัก",
    src: "../static/frontend/video/6.1 การสร้างทางลัด อพม.Smart ไว้บนหน้าจอหลัก.mp4",
    watched: 0,
  },
];
window.addEventListener("load", function() {
    for (let c = 0; c <= 17; c++) {
      if(videos[c].watched == 0 ){
        document.getElementById("videoLink" + [c + 1]).style.color = "red";
      }else{
        document.getElementById("videoLink" + [c + 1]).style.color = "green";
      }
    }
  });  
var player = videojs("videoP");
function light(Cvideo) {
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].id === Cvideo) {
      document.getElementById("nameV").innerHTML = videos[i].name;
      player.src({ type: "video/mp4", src: videos[i].src });
      player.play();

      if (!videos[i].watched) {
        player.controlBar.progressControl.hide();

        player.on("timeupdate", function () {
          var percentage = (player.currentTime() / player.duration()) * 100;
          document.getElementById("percentage").innerHTML =
            Math.round(percentage) + "%";
          if (percentage === 100) {
            videos[i].watched = 1;
            return;
          }
        });
      } else {
        player.controlBar.progressControl.show();
      }
      break;
    }
  }
}

for (let v = 2; v <= 11; v++) {
  if (videos[v].watched == 0) {
    document.getElementById("videoLink" + [v + 2]).style.pointerEvents = "none";
  } else if (videos[v].watched == 1) {
    document.getElementById("videoLink" + [v + 2]).style.pointerEvents = "auto";
  }
}


function search() {
  // อ่านค่าจาก input ค้นหา
  var input, filter, links, i, txtValue;
  input = document.getElementById("find");
  filter = input.value.toUpperCase();
  links = document.getElementsByClassName("nav-link");
  // วนลูปเพื่อค้นหาข้อความใน <a>
  for (i = 0; i < links.length; i++) {
    txtValue = links[i].textContent || links[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      links[i].style.display = "";
    } else {
      links[i].style.display = "none";
    }
  }
}
