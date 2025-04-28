# FileM

FileM là một ứng dụng quản lý tài liệu với giao diện người dùng sử dụng **Angular** và backend được xây dựng trên nền tảng **NestJS**.   
Ứng dụng cho phép người dùng tải lên và quản lý các tài liệu, đồng thời hiển thị các tài liệu dưới dạng danh sách với các thông tin liên quan như tiêu đề, mô tả và liên kết tải về.  

## Nội dung

- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Cài đặt Backend (NestJS)](#cài-đặt-backend-nestjs)
- [Cài đặt Frontend (Angular)](#cài-đặt-frontend-angular)
- [Cấu hình môi trường](#cấu-hình-môi-trường)
- [Sử dụng](#sử-dụng)  
- [Minh hoạ triển khai tấn công XSS và ClickJacking](#minh-hoạ-triển-khai-tấn-công-xss-và-clickjacking)  
- [Chạy ứng dụng](#chạy-ứng-dụng)
- [Liên hệ](#liên-hệ)

## Yêu cầu hệ thống

Trước khi bắt đầu, bạn cần cài đặt các công cụ và phần mềm sau:

- Node.js (20.0.0)
- NPM (>=8.0.0)
- MongoDB Compass.

## Cài đặt Backend (NestJS)

1. Di chuyển vào thư mục `server/`:
    ```bash
    cd server
    ```

2. Cài đặt các phụ thuộc:
    ```bash
    npm install
    ```

3. Cấu hình kết nối MongoDB Compass Local trong file `.env`:
    - Tạo file `.env` trong thư mục gốc của dự án và thêm thông tin kết nối MongoDB:
      ```
      MONGO_URI=mongodb://localhost:27017/fileM
      ```

4. Chạy ứng dụng NestJS:
    ```bash
    npm run start:dev
    ```

## Cài đặt Frontend (Angular)

1. Di chuyển vào thư mục `client/`:
    ```bash
    cd client
    ```

2. Cài đặt các phụ thuộc:
    ```bash
    npm install
    ```

3. Cấu hình API server trong file `environment.ts`:
    - Mở file `src/environments/environment.ts` và thay đổi giá trị của `apiUrl`:
      ```ts
      export const environment = {
        production: false,
        apiUrl: 'http://localhost:3001/api', // Địa chỉ API của Backend
      };
      ```

4. Chạy ứng dụng Angular:
    ```bash
    ng serve
    ```

   Frontend sẽ chạy ở cổng `4200`.

## Cấu hình môi trường

Để chạy ứng dụng trên môi trường sản xuất hoặc với cấu hình khác, bạn có thể thay đổi các giá trị trong các file `.env` cho backend và `environment.ts` cho frontend.

## Sử dụng

### Cách tải lên tài liệu:
1. Người dùng có thể tải lên tài liệu thông qua giao diện người dùng trên frontend.
2. Tài liệu sẽ được lưu trữ trên backend, bao gồm các thông tin:
   - `title`: Tiêu đề của tài liệu.
   - `description`: Mô tả chi tiết, có thể bao gồm liên kết (HTML).
   - `fileUrl`: URL tải về tài liệu.
   - `createdAt`: Thời gian tạo tài liệu.

### Render HTML an toàn:
- Backend trả về dữ liệu tài liệu, trong đó `description` có thể chứa HTML (ví dụ: thẻ `<a>`).
- Frontend sử dụng `innerHTML` để render mô tả, nhưng **cảnh giác với XSS**. Angular sử dụng `DomSanitizer` để bảo vệ ứng dụng khỏi các cuộc tấn công XSS khi render HTML.

## Chạy ứng dụng

1. **Chạy Backend:**
    ```bash
    cd server
    npm run start:dev
    ```

2. **Chạy Frontend:**
    ```bash
    cd client
    ng serve
    ```

   Sau khi chạy cả hai, truy cập ứng dụng tại `http://localhost:4200` để sử dụng.

## Minh hoạ tấn công XSS, CLICKJACKING  
### ScreenShots
![image](https://github.com/user-attachments/assets/db704d3b-15dd-4eae-b0e4-26558e3e88bf)  
Trang mô phỏng clickjacking  
![image](https://github.com/user-attachments/assets/c81bbf8c-af54-403f-96f3-da23cfe67f46)


## Liên hệ

- **Email:** hai.hv04@gmail.com
- **GitHub:** [https://github.com/cjjjjjk/fileM](https://github.com/cjjjjjk/fileM)

