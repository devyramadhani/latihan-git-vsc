var pelanggan = {
    nama: "Dian Sastra",
    status: "member",
  };
  
  var pesanan = [
    {
      no: 1,
      kode: "001",
      namaBarang: "Pepsoden",
      qty: 20,
      hargaSatuan: 500000,
      subTotal: 1000000,
    },
    {
      no: 2,
      kode: "002",
      namaBarang: "Aqua",
      qty: 10,
      hargaSatuan: 5000,
      subTotal: 50000,
    },
  ];
  

  var totalBelanja = 1050000;
  
  
  console.log("Nama Pelanggan: " + pelanggan.nama);
  console.log("Status: " + pelanggan.status);
  
  
  console.log("===================================================================");
  console.log("No\tKode\tNama Barang\tQty\tHarga Satuan\tSub Total");
  console.log("===================================================================");
  for (var i = 0; i < pesanan.length; i++) {
    console.log(
      pesanan[i].no + "\t" +
      pesanan[i].kode + "\t" +
      pesanan[i].namaBarang + "\t" +
      pesanan[i].qty + "\t" +
      pesanan[i].hargaSatuan + "\t" +
      pesanan[i].subTotal
    );
  }
  console.log("===================================================================");
  
  console.log("\t\t\t\t\tTOTAL BELANJA: " + totalBelanja);
  