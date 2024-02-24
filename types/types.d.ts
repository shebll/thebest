interface TeamMember {
  _id: string;
  name: string;
  phone: string;
  role: "Leader" | "Member";
  teamId: string;
  Deleted: boolean;
  isBlocked: boolean;
  __v: number;
  createdAt: string;
  updatedAt: string;
  image: Image;
}

interface Team {
  _id: string;
  name: string;
  city: string;
  memberCode: string;
  isConfirmed: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ApiResponseTeam {
  success: boolean;
  team: Team;
  record: null;
  teamMembers: TeamMember[];
}
// todo
interface ApiResponseGroup {
  any;
}
// todo
interface ApiResponseMatches {
  any;
}
interface Image {
  secure_url: string;
  public_id: string;
}
interface User {
  _id: string;
  name: string;
  image: Image;
  phone: string;
  teamId: {
    _id: string;
    name: string;
    city: string;
  };
}

interface ApiResponseUsers {
  success: boolean;
  message: string;
  users: User[];
  numberOfPages: number;
}
interface ApiResponseTeams {
  success: boolean;
  message: string;
  teams: Teams[];
  numberOfPages: number;
}
interface Teams {
  _id: string;
  name: string;
  city: string;
}

interface TeamRequest {
  _id: string;
  teamId: {
    _id: string;
    name: string;
  };
}

interface ApiResponseRequests {
  success: boolean;
  message: string;
  requests: TeamRequest[];
  numberOfPages: number;
}

interface RequestImage {
  secure_url: string;
}

interface Request {
  image: RequestImage;
  _id: string;
}

interface ApiResponseRequest {
  success: boolean;
  message: string;
  request: Request;
}

interface TeamMemberDetails {
  isBlocked: boolean;
  _id: string;
  name: string;
  phone: string;
  image: {
    secure_url: string;
    public_id: string;
  };
  role: string;
  teamId: string;
  Deleted: boolean;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

interface TeamRecord {
  team: {
    name: string;
    id: string;
  };
  group: {
    name: string;
    id: string;
  };
  qualifyingResults: {
    goalsFor: number;
    goalsAgainst: number;
    goalsDifference: number;
  };
  _id: string;
  leagueId: string;
  isActivated: boolean;
  wins: number;
  losses: number;
  ties: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsDifference: number;
  order: number;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

interface TeamDetails {
  _id: string;
  name: string;
  city: string;
  leaderCode: string;
  memberCode: string;
  isConfirmed: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface TeamDetailsResponse {
  success: boolean;
  message: string;
  team: TeamDetails;
  record: TeamRecord;
  teamMembers: TeamMemberDetails[];
}

interface ApiResponseUserDetails {
  success: boolean;
  message: string;
  findUser: UserDetails;
}

interface UserDetails {
  _id: string;
  name: string;
  phone: string;
  role: string;
  teamId: string;
  Deleted: boolean;
  isBlocked: boolean;
  image: {
    secure_url: string;
    public_id: string;
  };
  __v: number;
  createdAt: string;
  updatedAt: string;
}
