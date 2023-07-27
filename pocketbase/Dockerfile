FROM alpine:latest

COPY . /pb/

RUN apk add --no-cache ca-certificates

EXPOSE 8080

# start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]
