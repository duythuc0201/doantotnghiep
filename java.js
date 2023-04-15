let bed_icon = document.getElementById('bedroom');
let home_tab = document.getElementById('home_tab');
let bed_tab = document.getElementById('bed_tab');
let bed_back = document.getElementById('bed_back');
let living_back = document.getElementById('living_back');
let living_tab = document.getElementById('living_tab');
let living_icon = document.getElementById('livingroom');

let popup = document.getElementById('popup');
let close_popup = document.getElementById('close_popup');
let popup_msg = document.getElementById('popup_msg');

close_popup.onclick = function(){
	popup_wipedown();
}
popup_wipedown = function(){
	popup.style.opacity = 0;
	popup.style.marginTop = "10px";
}
popup_wipeup = function(){
	popup.style.opacity = 1;
	popup.style.marginTop = "-70px";
}


living_icon.onclick = function(){
	console.log('Đã vào phòng khách');
	home_tab.style.display = "none";
	home_tab.style.opacity = 0;
	bed_tab.style.display = "none";
	bed_tab.style.opacity = 0;
	home_tab.style.margin = "-20px 0px 0px 0px";
	bed_tab.style.margin = "-20px 0px 0px 0px";
	living_tab.style.display = "block";
	setTimeout(
		 () => {

    living_tab.style.opacity = 1;
    living_tab.style.margin = "0px 0px 0px 0px";
  }
		
		,0);

}



bed_icon.onclick = function(){
	console.log("Đã vào phòng ngủ");
	home_tab.style.display = "none";
	bed_tab.style.display = "block";
	home_tab.style.opacity = 0;
	home_tab.style.margin = "-20px 0px 0px 0px";
	living_tab.style.display = "none";
	living_tab.style.opacity = 0;
	living_tab.style.margin = "-20px 0px 0px 0px";

	
	setTimeout(
		 () => {

    bed_tab.style.opacity = 1;
    bed_tab.style.margin = "0px 0px 0px 0px";
  }
		
		,0);
	
}
bed_back.onclick = function(){
	bed_tab.style.display = "none";
	home_tab.style.display = "block";
	bed_tab.style.opacity = 0;
	bed_tab.style.margin = "-20px 0px 0px 0px";
	living_tab.style.display = "none";
	living_tab.style.opacity = 0;
	living_tab.style.margin = "-20px 0px 0px 0px";

	setTimeout(
		 () => {
    console.log('Đã về trang chủ');
    home_tab.style.opacity = 1;
    home_tab.style.margin = "0px 0px 0px 0px";
  }
		
		,0);
}
living_back.onclick = function(){
	bed_tab.style.display = "none";
	home_tab.style.display = "block";
	bed_tab.style.opacity = 0;
	bed_tab.style.margin = "-20px 0px 0px 0px";
	living_tab.style.display = "none";
	living_tab.style.opacity = 0;
	living_tab.style.margin = "-20px 0px 0px 0px";

	setTimeout(
		 () => {
    console.log('Đã về trang chủ');
    home_tab.style.opacity = 1;
    home_tab.style.margin = "0px 0px 0px 0px";
  }
		
		,0);
}

let ss_back_bed = document.getElementById('ss_back_bed');

ss_back_bed.onclick = function(){
	console.log("Đã về phòng ngủ");
	home_tab.style.display = "none";
	sensor_tab.style.display = "none";
	home_tab.style.opacity = 0;
	home_tab.style.margin = "-20px 0px 0px 0px";
	bed_tab.style.display = "block";
	sensor_tab.style.margin =  "-20px 0px 0px 0px";
	sensor_tab.style.opacity = 0;
	setTimeout(
		 () => {
  
    bed_tab.style.opacity = 1;
    bed_tab.style.margin = "0px 0px 0px 0px";
  }
		,0);
}
let display_temp = document.getElementById('display_temp');
let sensor_setting = document.getElementById('sensor_setting');
let ss_status = document.getElementById('ss_status');
let body_sensor = document.getElementById('body_sensor');
let ss_num = 1;
ss_status.onclick = function(){
	ss_num++;
	if (ss_num%2 == 0)	{
		ss_status.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	 	ss_status.innerHTML = "ON";
	 	check_temp();
	 	ss_status.style.color = "white";
	 	sensor_setting.style.opacity = 1;
	 	display_temp.style.opacity = 1;
		body_sensor.style.boxShadow = "0px 0px 20px 10px red";
		body_sensor.style.backgroundColor = "#e65b80";
		console.log('Đã bật cảm biến nhiệt độ');
	 	popup_wipeup();
	 	popup_msg.innerHTML = "Temperature sensor turned to on";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
	else {
		ss_status.innerHTML = "OFF";
		ss_status.style.color = "black";
		ss_status.style.backgroundImage = "none";
		warning_panel.style.display = "none";
	 	sensor_setting.style.opacity = 0;
	 	display_temp.style.opacity = 0;
		body_sensor.style.boxShadow = "0px 0px 20px 3px black";
		body_sensor.style.backgroundColor = "#e2e2e2";
		console.log('Đã tắt cảm biến nhiệt độ');
		popup_wipeup();
	 	popup_msg.innerHTML = "Temperature sensor turned to off";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
}



let liv_light = document.getElementById('liv_light');
let wifi = document.getElementById('wifi');
let air_conditioner = document.getElementById('air_conditioner');
let television = document.getElementById('television');
let a = 0, b =0, c=0, d=0;

liv_light.onclick = function(){
	a+=0.5;
	if (a%2 == 1) {
		console.log("Đã bật đèn phòng khách");
		popup_wipeup();
	 	popup_msg.innerHTML = "Livingroom's light is turn on";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
	if (a%2 ==0) {
		console.log("Đã tắt đèn phòng khách");
		popup_wipeup();
	 	popup_msg.innerHTML = "Livingroom's light is turn off";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
}

wifi.onclick = function(){
	b+=0.5;
	
	if (b%2 == 1) {
		console.log("Đã bật wifi");
		popup_wipeup();
	 	popup_msg.innerHTML = "Wifi is turn on";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
	if (b%2 ==0) {
		console.log("Đã tắt wifi");
		popup_wipeup();
	 	popup_msg.innerHTML = "Wifi is turn off";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
}

air_conditioner.onclick = function(){
	c+=0.5;

	if (c%2 == 1) {
		console.log("Đã bật điều hòa");
		popup_wipeup();
	 	popup_msg.innerHTML = "Air conditioner is turn on";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
	if (c%2 ==0) {
		console.log("Đã tắt điều hòa");
		popup_wipeup();
	 	popup_msg.innerHTML = "Air conditioner is turn off";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
}

television.onclick = function(){
	d+=0.5;
	if (d%2 == 1) {
		console.log("Đã bật ti vi");
		popup_wipeup();
	 	popup_msg.innerHTML = "Television is turn on";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
	if (d%2 ==0) {
		console.log("Đã tắt ti vi");
		popup_wipeup();
	 	popup_msg.innerHTML = "Television is turn off";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
}



check_temp = function(){

	if (Number(set_temp.value) > Number(set_up_threshold.value))
	{
		warning_panel.style.borderTop = "30px solid red";
		warning_panel.style.boxShadow =  "0px 0px 10px 3px #e65b80";
		warning_panel.style.display = "block";
		warning_text.innerHTML = "Temperature is too high";
		console.log('Nhiệt độ quá cao');
	}
	else if (Number(set_temp.value) < Number(set_down_threshold.value))
	{
		warning_panel.style.borderTop = "30px solid #16c7d4";
		warning_panel.style.boxShadow =  "0px 0px 10px 3px #16c7d4";
		warning_panel.style.display = "block";
		warning_text.innerHTML = "Temperature is too low";
		console.log('Nhiệt độ quá thấp');
	}
	else
	{
	
		warning_panel.style.display = "none";
	}
}


let warning_panel = document.getElementById('warning_panel');
let warning_text = document.getElementById('warning_text');

let set_temp = document.getElementById('set_temp');
let nhietdo = document.getElementById('nhietdo');
let set_up_threshold = document.getElementById('set_up_threshold');
let set_down_threshold = document.getElementById('set_down_threshold');
let up_threshold = document.getElementById('up_threshold');
let down_threshold = document.getElementById('down_threshold');

set_temp.oninput = function(){
	nhietdo.innerHTML = set_temp.value;
	check_temp();
}

set_up_threshold.oninput = function(){
	up_threshold.innerHTML = set_up_threshold.value;
	check_temp();
}
set_down_threshold.oninput = function(){
	down_threshold.innerHTML = set_down_threshold.value;
	check_temp();
}

let sensor_detail = document.getElementById('sensor_detail');
let ss_thanhtruot = document.getElementById('ss_thanhtruot');
let ss_den1 = document.getElementById('ss_den1');
let ss_den2 = document.getElementById('ss_den2');
let ss_den3 = document.getElementById('ss_den3');
let ss_den4 = document.getElementById('ss_den4');
let ss_den5 = document.getElementById('ss_den5');

let ss_adjust = document.getElementById('ss_adjust_left');
ss_den1.onclick = function(){
	console.log('Đã chọn cảm biến nhiệt độ');
	ss_adjust.style.margin = "0px 0px 0px 90px";
	ss_den1.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	sensor_detail.style.opacity = 1;
	ss_den1.style.opacity = 1;
	ss_den2.style.backgroundImage = "none";
	ss_den2.style.opacity = 0.5;
	ss_den3.style.backgroundImage = "none";
	ss_den3.style.opacity = 0.5;
	ss_den4.style.backgroundImage = "none";
	ss_den4.style.opacity = 0.5;
	ss_den5.style.backgroundImage = "none";
	ss_den5.style.opacity = 0.5;

	ss_den1.style.color = "#ffffff";
	ss_den2.style.color = "#a9a9a9";
	ss_den3.style.color = "#a9a9a9";
	ss_den4.style.color = "#a9a9a9";
	ss_den5.style.color = "#a9a9a9";

}
ss_den2.onclick = function(){
	console.log('Đã chọn cảm biến khói');
	ss_adjust.style.margin = "0px 0px 0px -26px";
	ss_den2.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	sensor_detail.style.opacity = 0;
	ss_den2.style.opacity = 1;
	ss_den1.style.backgroundImage = "none";
	ss_den1.style.opacity = 0.5;
	ss_den3.style.backgroundImage = "none";
	ss_den3.style.opacity = 0.5;
	ss_den4.style.backgroundImage = "none";
	ss_den4.style.opacity = 0.5;
	ss_den5.style.backgroundImage = "none";
	ss_den5.style.opacity = 0.5;

	ss_den2.style.color = "#ffffff";
	ss_den1.style.color = "#a9a9a9";
	ss_den3.style.color = "#a9a9a9";
	ss_den4.style.color = "#a9a9a9";
	ss_den5.style.color = "#a9a9a9";


}
ss_den3.onclick = function(){
	console.log('Đã chọn cảm biến người');
	ss_adjust.style.margin = "0px 0px 0px -142px";
	ss_den3.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	sensor_detail.style.opacity = 0;
	ss_den3.style.opacity = 1;
	ss_den2.style.backgroundImage = "none";
	ss_den2.style.opacity = 0.5;
	ss_den1.style.backgroundImage = "none";
	ss_den1.style.opacity = 0.5;
	ss_den4.style.backgroundImage = "none";
	ss_den4.style.opacity = 0.5;
	ss_den5.style.backgroundImage = "none";
	ss_den5.style.opacity = 0.5;

	ss_den3.style.color = "#ffffff";
	ss_den2.style.color = "#a9a9a9";
	ss_den1.style.color = "#a9a9a9";
	ss_den4.style.color = "#a9a9a9";
	ss_den5.style.color = "#a9a9a9";

}
ss_den4.onclick = function(){
	console.log('Đã chọn cảm biến vị trí');
	ss_adjust.style.margin = "0px 0px 0px -256px";
	ss_den4.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	sensor_detail.style.opacity = 0;
	ss_den4.style.opacity = 1;
	ss_den2.style.backgroundImage = "none";
	ss_den2.style.opacity = 0.5;
	ss_den3.style.backgroundImage = "none";
	ss_den3.style.opacity = 0.5;
	ss_den1.style.backgroundImage = "none";
	ss_den1.style.opacity = 0.5;
	ss_den5.style.backgroundImage = "none";
	ss_den5.style.opacity = 0.5;
	ss_den4.style.color = "#ffffff";
	ss_den2.style.color = "#a9a9a9";
	ss_den3.style.color = "#a9a9a9";
	ss_den1.style.color = "#a9a9a9";
	ss_den5.style.color = "#a9a9a9";
}
ss_den5.onclick = function(){
	console.log('Đã chọn cảm biến hình ảnh');
	ss_adjust.style.margin = "0px 0px 0px -374px";
	ss_den5.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	sensor_detail.style.opacity = 0;
	ss_den5.style.opacity = 1;
	ss_den2.style.backgroundImage = "none";
	ss_den2.style.opacity = 0.5;
	ss_den3.style.backgroundImage = "none";
	ss_den3.style.opacity = 0.5;
	ss_den4.style.backgroundImage = "none";
	ss_den4.style.opacity = 0.5;
	ss_den1.style.backgroundImage = "none";
	ss_den1.style.opacity = 0.5;
	ss_den5.style.color = "#ffffff";
	ss_den2.style.color = "#a9a9a9";
	ss_den3.style.color = "#a9a9a9";
	ss_den4.style.color = "#a9a9a9";
	ss_den1.style.color = "#a9a9a9";

}

let thanhtruot = document.getElementById('thanhtruot');
let den1 = document.getElementById('den1');
let den2 = document.getElementById('den2');
let den3 = document.getElementById('den3');
let den4 = document.getElementById('den4');
let den5 = document.getElementById('den5');
let den6 = document.getElementById('den6');
let adjust = document.getElementById('adjust_left');

let light_detail = document.getElementById('light_detail');


den1.onclick = function(){
	console.log('Đã chọn Bedroom bulb');
	adjust.style.margin = "0px 0px 0px 90px";
	den1.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	light_detail.style.opacity = 0;
	den1.style.opacity = 1;
	den2.style.backgroundImage = "none";
	den2.style.opacity = 0.5;
	den3.style.backgroundImage = "none";
	den3.style.opacity = 0.5;
	den4.style.backgroundImage = "none";
	den4.style.opacity = 0.5;
	den5.style.backgroundImage = "none";
	den5.style.opacity = 0.5;
	den6.style.backgroundImage = "none";
	den6.style.opacity = 0.5;
	den1.style.color = "#ffffff";
	den2.style.color = "#a9a9a9";
	den3.style.color = "#a9a9a9";
	den4.style.color = "#a9a9a9";
	den5.style.color = "#a9a9a9";
	den6.style.color = "#a9a9a9";
}
den2.onclick = function(){
	console.log('Đã chọn Bed lamp');
	adjust.style.margin = "0px 0px 0px -26px";
	den2.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	light_detail.style.opacity = 1;
	den2.style.opacity = 1;
	den1.style.backgroundImage = "none";
	den1.style.opacity = 0.5;
	den3.style.backgroundImage = "none";
	den3.style.opacity = 0.5;
	den4.style.backgroundImage = "none";
	den4.style.opacity = 0.5;
	den5.style.backgroundImage = "none";
	den5.style.opacity = 0.5;
	den6.style.backgroundImage = "none";
	den6.style.opacity = 0.5;
	den2.style.color = "#ffffff";
	den1.style.color = "#a9a9a9";
	den3.style.color = "#a9a9a9";
	den4.style.color = "#a9a9a9";
	den5.style.color = "#a9a9a9";
	den6.style.color = "#a9a9a9";

}
den3.onclick = function(){
	console.log('Đã chọn Sun');
	adjust.style.margin = "0px 0px 0px -142px";
	den3.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	light_detail.style.opacity = 0;
	den3.style.opacity = 1;
	den2.style.backgroundImage = "none";
	den2.style.opacity = 0.5;
	den1.style.backgroundImage = "none";
	den1.style.opacity = 0.5;
	den4.style.backgroundImage = "none";
	den4.style.opacity = 0.5;
	den5.style.backgroundImage = "none";
	den5.style.opacity = 0.5;
	den6.style.backgroundImage = "none";
	den6.style.opacity = 0.5;
	den3.style.color = "#ffffff";
	den2.style.color = "#a9a9a9";
	den1.style.color = "#a9a9a9";
	den4.style.color = "#a9a9a9";
	den5.style.color = "#a9a9a9";
	den6.style.color = "#a9a9a9";
}
den4.onclick = function(){
	console.log('Đã chọn tubelight');
	adjust.style.margin = "0px 0px 0px -256px";
	den4.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	light_detail.style.opacity = 0;
	den4.style.opacity = 1;
	den2.style.backgroundImage = "none";
	den2.style.opacity = 0.5;
	den3.style.backgroundImage = "none";
	den3.style.opacity = 0.5;
	den1.style.backgroundImage = "none";
	den1.style.opacity = 0.5;
	den5.style.backgroundImage = "none";
	den5.style.opacity = 0.5;
	den6.style.backgroundImage = "none";
	den6.style.opacity = 0.5;
	den4.style.color = "#ffffff";
	den2.style.color = "#a9a9a9";
	den3.style.color = "#a9a9a9";
	den1.style.color = "#a9a9a9";
	den5.style.color = "#a9a9a9";
	den6.style.color = "#a9a9a9";
}
den5.onclick = function(){
	console.log('Đã chọn Light 2');
	adjust.style.margin = "0px 0px 0px -374px";
	den5.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	light_detail.style.opacity = 0;
	den5.style.opacity = 1;
	den2.style.backgroundImage = "none";
	den2.style.opacity = 0.5;
	den3.style.backgroundImage = "none";
	den3.style.opacity = 0.5;
	den4.style.backgroundImage = "none";
	den4.style.opacity = 0.5;
	den1.style.backgroundImage = "none";
	den1.style.opacity = 0.5;
	den6.style.backgroundImage = "none";
	den6.style.opacity = 0.5;
	den5.style.color = "#ffffff";
	den2.style.color = "#a9a9a9";
	den3.style.color = "#a9a9a9";
	den4.style.color = "#a9a9a9";
	den1.style.color = "#a9a9a9";
	den6.style.color = "#a9a9a9";
}
den6.onclick = function(){
	console.log('Đã chọn Light 3');
	adjust.style.margin = "0px 0px 0px -490px";
	den6.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	light_detail.style.opacity = 0;
	den6.style.opacity = 1;
	den2.style.backgroundImage = "none";
	den2.style.opacity = 0.5;
	den3.style.backgroundImage = "none";
	den3.style.opacity = 0.5;
	den4.style.backgroundImage = "none";
	den4.style.opacity = 0.5;
	den5.style.backgroundImage = "none";
	den5.style.opacity = 0.5;
	den1.style.backgroundImage = "none";
	den1.style.opacity = 0.5;
	den6.style.color = "#ffffff";
	den2.style.color = "#a9a9a9";
	den3.style.color = "#a9a9a9";
	den4.style.color = "#a9a9a9";
	den5.style.color = "#a9a9a9";
	den1.style.color = "#a9a9a9";
}

let device_stt = document.getElementById('status');
let num_device_stt = 0;
device_stt.onclick = function(){
	num_device_stt++;
	if (num_device_stt%2 == 0)	{
		device_stt.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	 	device_stt.innerHTML = "ON";
	 	device_stt.style.color = "white";
	 	top_lamp.style.borderBottom = "100px solid green";
		top_lamp.style.boxShadow = "0px 40px 22px -20px gre";
		console.log('Đã bật đèn ngủ');
	 	popup_wipeup();
	 	popup_msg.innerHTML = "Bed lamp turned to on";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
	else {
		device_stt.innerHTML = "OFF";
		device_stt.style.color = "black";
		device_stt.style.backgroundImage = "none";
		top_lamp.style.borderBottom = "100px solid #f2f2f2";
		top_lamp.style.boxShadow = "0px 40px 22px -20px #f2f2f2";
		console.log('Đã tắt đèn ngủ');
		popup_wipeup();
	 	popup_msg.innerHTML = "Bed lamp turned to off";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);
	}
}

let mode1 = document.getElementById('mode1');
let mode2 = document.getElementById('mode2');
let mode3 = document.getElementById('mode3');

mode1.onclick = function(){
	if (num_device_stt%2 == 0){
	mode1.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	mode1.style.color =  "white";
	mode2.style.backgroundImage = "none";
	mode2.style.color =  "#afb0b2";
	mode3.style.backgroundImage = "none";
	mode3.style.color =  "#afb0b2";
	console.log('Đèn ngủ được đặt sang chế độ ban đêm');
	popup_wipeup();
	 	popup_msg.innerHTML = "Bed lamp change to Night Mode";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);}
}
mode2.onclick = function(){
	if (num_device_stt%2 == 0){
	mode2.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	mode2.style.color =  "white";
	mode1.style.backgroundImage = "none";
	mode1.style.color =  "#afb0b2";
	mode3.style.backgroundImage = "none";
	mode3.style.color =  "#afb0b2";
	console.log('Đèn ngủ được đặt sang chế độ ban ngày');
	popup_wipeup();
	 	popup_msg.innerHTML = "Bed lamp change to Day Mode";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);}
}
mode3.onclick = function(){
	if (num_device_stt%2 == 0){
	mode3.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	mode3.style.color =  "white";
	mode2.style.backgroundImage = "none";
	mode2.style.color =  "#afb0b2";
	mode1.style.backgroundImage = "none";
	mode1.style.color =  "#afb0b2";
	console.log('Đèn ngủ được đặt sang chế độ buổi sáng');
	popup_wipeup();
	 	popup_msg.innerHTML = "Bed lamp change to Morning Mode";
	 	setTimeout(
	 		() => {
	 			popup_wipedown();
	 		},3000);}
}
let intensity = document.getElementById('intensity');
let top_lamp = document.getElementById('top_lamp');
intensity.oninput = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.opacity = intensity.value/100;}
}

let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');
let color5 = document.getElementById('color5');
let color6 = document.getElementById('color6');
let color7 = document.getElementById('color7');
let color8 = document.getElementById('color8');
let color9 = document.getElementById('color9');
let color10 = document.getElementById('color10');
let color11 = document.getElementById('color11');

color1.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.borderBottom = "100px solid #ef242a";
	top_lamp.style.boxShadow = "0px 40px 22px -20px #ef242a";
	color1.style.boxShadow = "0px 0px 10px 3px #ef242a";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";}
}
color2.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.borderBottom = "100px solid #ee2655";
	top_lamp.style.boxShadow = "0px 40px 22px -20px #ee2655";
	color2.style.boxShadow = "0px 0px 10px 3px #ee2655";
	color1.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";}
}
color3.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.borderBottom = "100px solid #ed2891";
	top_lamp.style.boxShadow = "0px 40px 22px -20px #ed2891";
	color3.style.boxShadow = "0px 0px 10px 3px #ed2891";
	color2.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";}
}
color4.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.borderBottom = "100px solid #9b50a3";
	top_lamp.style.boxShadow = "0px 40px 22px -20px #9b50a3";
	color4.style.boxShadow = "0px 0px 10px 3px #9b50a3";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";}
}
color5.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.borderBottom = "100px solid #4954a4";
	top_lamp.style.boxShadow = "0px 40px 22px -20px #4954a4";
	color5.style.boxShadow = "0px 0px 10px 3px #4954a4";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";}
}
color6.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.borderBottom = "100px solid #4671b6";
	top_lamp.style.boxShadow = "0px 40px 22px -20px #4671b6";
	color6.style.boxShadow = "0px 0px 10px 3px #4671b6";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";}
}
color7.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.borderBottom = "100px solid #70cdd4";
	top_lamp.style.boxShadow = "0px 40px 22px -20px #70cdd4";
	color7.style.boxShadow = "0px 0px 10px 3px #70cdd4";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";}
}
color8.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.borderBottom = "100px solid green";
	top_lamp.style.boxShadow = "0px 40px 22px -20px green";
	color8.style.boxShadow = "0px 0px 10px 3px green";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";}
}
color9.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.borderBottom = "100px solid #f7f121";
	top_lamp.style.boxShadow = "0px 40px 22px -20px #f7f121";
	color9.style.boxShadow = "0px 0px 10px 3px #f7f121";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";}
}
color10.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.borderBottom = "100px solid #f47725";
	top_lamp.style.boxShadow = "0px 40px 22px -20px #f47725";
	color10.style.boxShadow = "0px 0px 10px 3px #f47725";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color11.style.boxShadow = "none";}
}
color11.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.borderBottom = "100px solid #ec2f29";
	top_lamp.style.boxShadow = "0px 40px 22px -20px #ec2f29";
	color11.style.boxShadow = "0px 0px 10px 3px #ec2f29";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color1.style.boxShadow = "none";}
}
let sensor = document.getElementById('sensor');
let sensor_tab = document.getElementById('sensor_tab');
let lighting_tab = document.getElementById('lighting_tab');
let lighting = document.getElementById('lighting');
let back_bed = document.getElementById('back_bed');
lighting.onclick = function(){
	console.log("Đã vào tab Lighting");
	home_tab.style.display = "none";
	bed_tab.style.display = "none";
	home_tab.style.opacity = 0;
	home_tab.style.margin = "-20px 0px 0px 0px";
	lighting_tab.style.display = "block";
	bed_tab.style.margin =  "-20px 0px 0px 0px";
	bed_tab.style.opacity = 0;
	setTimeout(
		 () => {
    lighting_tab.style.opacity = 1;
    lighting_tab.style.margin = "0px 0px 0px 0px";
  }
		
		,0);

}


back_bed.onclick = function(){
	console.log("Đã về phòng ngủ");
	home_tab.style.display = "none";
	lighting_tab.style.display = "none";
	home_tab.style.opacity = 0;
	home_tab.style.margin = "-20px 0px 0px 0px";
	bed_tab.style.display = "block";
	lighting_tab.style.margin =  "-20px 0px 0px 0px";
	lighting_tab.style.opacity = 0;
	setTimeout(
		 () => {

    bed_tab.style.opacity = 1;
    bed_tab.style.margin = "0px 0px 0px 0px";
  }
		,0);
}


sensor.onclick = function(){
	console.log('Đã vào tab Sensor');
	home_tab.style.display = "none";
	home_tab.style.opacity = 0;
	home_tab.style.margin = "-20px 0px 0px 0px";
	bed_tab.style.display = "none";
	bed_tab.style.opacity = 0;
	bed_tab.style.margin = "-20px 0px 0px 0px";
	sensor_tab.style.display = "block";
	setTimeout(
		 () => {
  
    sensor_tab.style.opacity = 1;
    sensor_tab.style.margin = "0px 0px 0px 0px";
  }
		,0);
}