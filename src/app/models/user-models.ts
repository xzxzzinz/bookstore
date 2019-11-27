//ข้อมูลUser
export class UserModel {
  id: number;
  username: string;
  password: string;
  fristName: string;
  lastName: string;
}

// ข้อมูลที่ต้องส่งไป login
export class LoginModel {
  username: string;
  password: string;
}

//ส่งผลลัพกลับมา ว่าเข้าได้ หรือไม่ได้
export class ResultAccount {
  status: string;
  data: UserModel;
  message: string;
}

export class LoginResult {
  status: string;
  data: UserModel;
  token: string;
}
