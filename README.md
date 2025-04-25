* Veritabanı Mysql olacak, ancak farklı veritabanları kolayca eklenilebilir şekilde "Extensibility" yazılım ilkesine uyularak yapılacak.
* SOLID, YAGNI, KISS, DRY Yazılım Prensipleri uyum sağlanarak modüler şekilde programlama yapılacak, böylece "Maintainability (Bakım Yapılabilirlik)", Cost Reduction (Düşük Maliyetlilik) ilkelerine uyulacak.
* Backend kısmı ExpressJs kullanılarak Typescript programlama dilinde yapılacak.
* Frontend kısmı, SSR ile backend kodları da içererek NextJs kullanılarak Typescript programlama dilinde yapılacak.
* Uzak veritabanından ve farklı url adreslerinden, ve aynı sistemden Docker, Kubernetes gibi sanallaştırma yazılımları kullanan sistemlerden veriler çekilebilecek. Mikroservis mimarisine uygun olacak.
* Tüm api çağrılarına cevap veren ana sistem, aynı zamanda Authentication (Kimlik Doğrulama) işlemini yapacak, bu sistem olası gecikmeleri önlemek için Queue (Kuyruk) tabanlı olacak, böylece sistemimiz milyonlarca http isteğine hızlıca cevap verebilecek. Bu iletişim işlemini sağlamak için Rabbit MQ ve Kafka gibi teknolojilerden yararlanılabilir.
* Backend ve frontend alanında farklı cache sistemleri olacak, backend alanında hızdan yararlanmak amacıyla Redis kullanılacak.
* Veritabanı Entity ve Modellerimiz, DDD mimarisi kullanılarak backend ve frontend katmanından farklı katmannda tutulacağı için, farklı web, mobil veya masaüstü gibi farklı platformlarda da kullanılabilecek ve böylece Profesyonel Yazılım İlkelerinden biri olan Flexibility kuralına uymuş olacağız.
* Çok dilli olarak programlanacak.
* Sunucu tipi olarak Linux VPS hosting kullanılacak, çünkü yazılım kurma, port çalıştırma konusunda tam bağımsızlık elde etmemiz gerekiyor.
