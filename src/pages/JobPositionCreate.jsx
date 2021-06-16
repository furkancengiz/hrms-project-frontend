
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import JobPositionService from '../services/jobPositionService'
import WayOfWorkingService from "../services/wayOfWorkingService";
import WorkTypeService from "../services/workTypeService";
import CityService from "../services/cityService";
import JobService from "../services/jobService";


export default function JobPositionCreate() {

    let jobPositionService = new JobPositionService();
    const JobPositionAddSchema = Yup.object().shape({

        jobId: Yup.number().required("Meslek alanı boş bırakılamaz"),
        cityId: Yup.number().required("Şehirler boş bırakılamaz"),
        wayOfWorkingId: Yup.number().required("boş bırakılamaz"),
        workTypeId: Yup.number().required("boş bırakılamaz"),
        description: Yup.string().required("boş bırakılamaz"),
        quota: Yup.number().required("bış bırakılamaz"),
        deadline: Yup.date().nullable().required("boş bırakılamaz"),
    });
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            jobId: "",
            cityId: "",
            employerId: "",
            wayOfWorkingId: "",
            workTypeId: "",
            description: "",
            quota: "",
            deadline: "",
            maxSalary: "",
            minSalary: "",


        },

        validatationSchema: JobPositionAddSchema,
        onSubmit: (values) => {

            values.employerId = 22
            /*   values.jobId=parseInt(values.jobId)
               values.wayOfWorkingId=parseInt(values.wayOfWorkingId)
               values.workTypeId=parseInt(values.workTypeId)
               values.cityId=parseInt(values.cityId)
               values.minSalary=parseInt(values.minSalary)
               values.maxSalary=parseInt(values.maxSalary)
               values.quota=parseInt(values.quota)*/
            jobPositionService.add(values).then((result) => console.log(result))
                alert("Başarı Ekleme")
            history.push("/jobPositions")



        },
    })
    const [workTypes, setWorkTypes] = useState([])
    const [wayOfWorkings, setWayOfWorkings] = useState([])
    const [cities, setCities] = useState([])
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        let workTypeService = new WorkTypeService();
        let wayOfWorkingService = new WayOfWorkingService();
        let cityService = new CityService();
        let jobService = new JobService();


        workTypeService.getworkTypes().then((result) => setWorkTypes(result.data.data))
        wayOfWorkingService.getwayOfWorkings().then((result) => setWayOfWorkings(result.data.data))
        cityService.getCities().then((result) => setCities(result.data.data))
        jobService.getJobs().then((result) => setJobs(result.data.data))



    }, [])

    const workTypeOption = workTypes.map((workType, index) => ({

        key: index,
        text: workType.workTypeName,

        value: workType.id,


    }))


    const wayOfWorkingOption = wayOfWorkings.map((wayOfWorking, index) => ({
        key: index,
        text: wayOfWorking.wayOfWorkingName,
        value: wayOfWorking.id,
    }))

    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id,
    }))

    const jobOption = jobs.map((job, index) => ({
        key: index,
        text: job.position,
        value: job.id
    }))

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }


    return (
        <div>
            <Card color="green" fluid>
                <Card.Content  header='İş ilanı Ekle' />
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                            <label>İş Posisyonu</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="İş pozisyonu"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "jobId")
                                }
                                onBlur={formik.onBlur}
                                id="jobId"
                                value={formik.values.jobId}
                                options={jobOption}
                            />
                            {formik.errors.jobId && formik.touched.jobId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.jobId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Şehir</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Şehir"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "cityId")
                                }
                                onBlur={formik.onBlur}
                                id="cityId"
                                value={formik.values.cityId}
                                options={cityOption}
                            />
                            {formik.errors.cityId && formik.touched.cityId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.cityId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Çalışma yeri</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Çalışma yeri"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workTypeId")
                                }
                                onBlur={formik.onBlur}
                                id="workTypeId"
                                value={formik.values.workTypeId}
                                options={workTypeOption}
                            />
                            {formik.errors.workTypeId && formik.touched.workTypeId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.workTypeId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Çalışma Süresi</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Çalışma Süresi"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "wayOfWorkingId")
                                }
                                onBlur={formik.onBlur}
                                id="wayOfWorkingId"
                                value={formik.values.wayOfWorkingId}
                                options={wayOfWorkingOption}
                            />
                            {formik.errors.wayOfWorkingId && formik.touched.wayOfWorkingId && (
                                <div className={"ui pointing red basic label"}>{formik.errors.wayOfWorkingId}</div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>Maaş aralığı MİNİMUM</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Maaş aralığı MİNİMUM"
                                        value={formik.values.minSalary}
                                        name="minSalary"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Input>
                                    {formik.errors.minSalary && formik.touched.minSalary && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.minSalary}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>Maaş aralığı MAKSİMUM</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Maaş aralığı MAKSİMUM"
                                        value={formik.values.maxSalary}
                                        name="maxSalary"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Input>
                                    {formik.errors.maxSalary && formik.touched.maxSalary && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.maxSalary}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>Açık Posisyon sayısı</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        id="quota"
                                        name="quota"
                                        error={Boolean(formik.errors.quota)}
                                        onChange={formik.handleChange}
                                        value={formik.values.quota}
                                        onBlur={formik.handleBlur}
                                        type="number"
                                        placeholder="Açık Posisyon sayısı"
                                    />
                                    {formik.errors.quota && formik.touched.quota && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.quota}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <label style={{ fontWeight: "bold" }}>Son başvuru tarihi</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="date"
                                        error={Boolean(formik.errors.deadline)}
                                        onChange={(event, data) =>
                                            handleChangeSemantic(data.value, "deadline")
                                        }
                                        value={formik.values.deadline}
                                        onBlur={formik.handleBlur}
                                        name="deadline"
                                        placeholder="Son başvuru tarihi"
                                    />
                                    {formik.errors.deadline && formik.touched.deadline && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.deadline}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <label>Açıklama</label>
                            <TextArea
                                placeholder="Açıklama"
                                style={{ minHeight: 100 }}
                                error={Boolean(formik.errors.description).toString()}
                                value={formik.values.description}
                                name="description"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.description && formik.touched.description && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.description}
                                </div>
                            )}
                        </Form.Field>
                        <Button
                            content="Ekle"
                            labelPosition="right"
                            icon="add"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                        />
                    </Form>
                </Card.Content>
            </Card>
        </div>




















    )

}