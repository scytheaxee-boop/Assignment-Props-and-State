# Proyek: Kalkulator Belanja Sederhana (React + TypeScript)

## Deskripsi Singkat Aplikasi

Aplikasi ini adalah simulasi keranjang belanja sederhana yang dibangun menggunakan React dan TypeScript. Aplikasi menampilkan daftar produk beserta harganya. Pengguna dapat menekan tombol "Tambah" untuk memasukkan produk ke dalam keranjang. Komponen keranjang akan secara otomatis menghitung dan menampilkan daftar barang yang dipilih beserta total harganya secara dinamis.

Tipe data (interfaces) dikelola secara terpusat di file `src/types.ts` untuk konsistensi dan kemudahan pengelolaan.

## Penjelasan Komponen Utama

Aplikasi ini terdiri dari tiga (3) komponen utama yang saling berhubungan:

1.  **`App.tsx` (Komponen Induk)**
    * **Fungsi:** Sebagai komponen induk (container) yang menampung seluruh logika utama aplikasi.
    * **Tanggung Jawab:** Menyimpan *state* utama (`cartItems`) dan data produk (`products`), serta mendefinisikan fungsi (`handleAddToCart`) untuk memanipulasi *state* tersebut.

2.  **`ProductList.tsx` (Komponen Anak)**
    * **Fungsi:** Menampilkan daftar semua produk yang tersedia untuk dibeli.
    * **Tanggung Jawab:** Menerima data produk dan fungsi *handler* dari `App.tsx`. Ketika tombol "Tambah" diklik, komponen ini akan memanggil fungsi yang diterima dari induknya.

3.  **`Cart.tsx` (Komponen Anak)**
    * **Fungsi:** Menampilkan isi keranjang belanja dan total harga.
    * **Tanggung Jawab:** Menerima data item yang ada di keranjang (`cartItems`) dari `App.tsx`. Komponen ini kemudian menghitung total harga berdasarkan data tersebut dan menampilkannya kepada pengguna.

## Letak Penggunaan Props dan State

### 1. Penggunaan `State`

`State` digunakan untuk menyimpan data yang dapat berubah seiring interaksi pengguna. Seluruh *state* utama aplikasi ini terpusat di `App.tsx`.

* **Lokasi:** `App.tsx`
* **Kode:**
    ```tsx
    // Menyimpan daftar produk (statis dalam kasus ini)
    const [products] = useState<Product[]>(initialProducts);
    
    // Menyimpan item keranjang (dinamis)
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    ```
* **Penjelasan:**
    * `cartItems` adalah *state* yang paling penting. Awalnya berupa array kosong.
    * Setiap kali fungsi `handleAddToCart` dipanggil (ketika tombol di `ProductList` diklik), fungsi `setCartItems` akan dijalankan untuk memperbarui *state* ini.
    * Perubahan pada *state* `cartItems` ini akan memicu React untuk me-render ulang komponen `App` dan komponen `Cart` (yang menerima data baru).

### 2. Penggunaan `Props`

`Props` (properties) digunakan untuk mengirim data atau fungsi dari komponen induk (`App.tsx`) ke komponen anak (`ProductList.tsx` dan `Cart.tsx`).

* **Alur 1: `App.tsx` $\rightarrow$ `ProductList.tsx`**
    * **Kode Pengiriman (di `App.tsx`):**
        ```tsx
        <ProductList products={products} onAddToCart={handleAddToCart} />
        ```
    * **Penjelasan:**
        * `products={products}`: `App` mengirimkan *state* `products` ke `ProductList` sebagai *prop* bernama `products`.
        * `onAddToCart={handleAddToCart}`: `App` mengirimkan *fungsi* `handleAddToCart` ke `ProductList` sebagai *prop* bernama `onAddToCart`. Ini memungkinkan komponen anak (`ProductList`) untuk memicu perubahan *state* di komponen induk (`App`).

* **Alur 2: `App.tsx` $\rightarrow$ `Cart.tsx`**
    * **Kode Pengiriman (di `App.tsx`):**
        ```tsx
        <Cart cartItems={cartItems} />
        ```
    * **Penjelasan:**
        * `cartItems={cartItems}`: `App` mengirimkan *state* `cartItems` (yang dinamis) ke `Cart` sebagai *prop* bernama `cartItems`. Setiap kali `cartItems` berubah, `Cart` akan menerima *props* baru dan menampilkan total yang ter-update.# Assignment-Props-and-State
