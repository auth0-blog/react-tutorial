## Prerequisites

To use the resources on this directory to deploy the Q&App React app to a Kubernetes cluster, first, you will need to configure [the Ambassador API Gateway](https://www.getambassador.io/) in your cluster. To do so, you can issue the following command (this may vary depending on the service provider you use):

```bash
kubectl apply -f https://getambassador.io/yaml/ambassador/ambassador-rbac.yaml
```

To learn more about this gateway, [check out this resource](https://www.getambassador.io/user-guide/getting-started/).

## Deploying

After installing the gateway in your cluster, you can issue the following commands to install deploy the React application:

```bash
kubectl apply -f ambassador.yaml

kubectl apply -f deployment.yaml

kubectl apply -f service.yaml
``` 

The first file will make your Kubernetes service provider create a _load balancer_ and point to your cluster. To find out the public IP address of your cluster (of this load balancer), you can issue the following command:

```bash
kubectl get svc ambassador \
  -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

Then, you can copy the IP printed from your terminal and paste it on a web browser.

> **Note:** If the command above outputs nothing, this means that your service provider is still spinning a load balancer for you.

## Cleaning Up

In case you want to clean up your cluster, you can issue the following commands:

```bash
kubectl delete -f service.yaml

kubectl delete -f deployment.yaml

kubectl delete -f ambassador.yaml

kubectl delete -f https://getambassador.io/yaml/ambassador/ambassador-rbac.yaml
```

The commands above are very similar to the commands you used to deploy the React app. The difference is that instead of `apply` you are using `delete` and that the order is upside down.
