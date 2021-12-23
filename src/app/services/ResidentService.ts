import {Injectable} from "@angular/core";

@Injectable()
export class ResidentService {
  findAllResidents = () =>
    fetch('http://finalexamnew-env.eba-nzchzxwm.us-east-2.elasticbeanstalk.com/api/v1/residents')
      .then(response => response.json())
}