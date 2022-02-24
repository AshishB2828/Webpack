import { AlertService } from "./app/alert.services";
import { run } from "./app/app";
import { ComponentService } from "./app/component.services";
import "./main.scss";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);