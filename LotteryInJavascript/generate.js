function generate(size, small, highest) { //size6, small:1, 49
	let numbers = [];  //Random bulduğumuz ve sıralayarak tekrar yükleyeceğimiz array oluşturuyoruz.
	for(let i = 0; i < size; i++) {
		let add = true;
		let randomNumber = Math.floor(Math.random() * highest) + 1; //aslında random değeri 0(sıfır) gelince small değeri +1 ile sağlanmış oluyor.
		//floor : aşağıya yuvarlar | Math.random() 0 ile 1 arası rastgele sayı üretir.
		for(let y = 0; y < highest; y++) {
			if(numbers[y] == randomNumber) {
				add = false;
			}
		}
		if(add) {
			numbers.push(randomNumber);
		} else {
			i--; 
			//Eğer istediğimiz değeri bulamadıysak dizinin index numarasını artmasın yoksa dizinin o index alanı boş kalır. 
		}
	}
  
	let highestNumber = 0;   
	for(let k = 0; k < numbers.length; k++) {
		for(let s = k + 1; s < numbers.length; s++) {
			if(numbers[s] < numbers[k]) {
				highestNumber = numbers[k];
				numbers[k] = numbers[s];
				numbers[s] = highestNumber;
			}
		}
	}  
	/*
		Büyükten küçüğe sıralama yapmak için iki [aynı] dizi kendi içinde kontrol edilir.
		1. Dizi 6 elemanlı (Sıralı olmayan numaraların olduğu dizi)
		2. Dizi 6 elemanlı (Bo dizi bu diziye 1. dizideki numraları 
		   küçükten büyüğe doğru sıralayıp atayacağız.) Raif YILMAZ
	*/
	document.getElementById("numbers").innerHTML = numbers.join(" - ");
}
/*
		1'den 49'a (dahil) kadar bir dizi oluşturan ve rasgele 
		altı öğeyi dizinin başına kaydıran bir işlev yazın. 
		Dizinin diğer öğelerini (7 ve ötesi) silin ve kalan sayıları sıralayın. 
		Bu işlev, bu 6 sayıyı sıralı bir artan dizide döndürmelidir.
		Proje amacına yönelik olarak yalnızca bir dizi tanımlamanız beklenir, 
		yedek dizi kullanımına izin verilmez.
 */