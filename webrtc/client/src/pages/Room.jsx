import { useEffect, useCallback, useState } from "react";
import { useSocket } from "../providers/Socket";
import { usePeer } from "../providers/Peer";
import ReactPlayer from "react-player";

export const Room = () => {
    const [myStream, setMyStream] = useState(null);
    const { socket } = useSocket();
    const [remoteEmailId, setRemoteEmailId] = useState(null);
    const {
        peer,
        createOffer,
        createAnswer,
        setRemoteAns,
        sendStream,
        remoteStream,
    } = usePeer();

    const handleNewUserJoined = useCallback(
        async (data) => {
            const { emailId } = data;
            console.log("New user joined", emailId);

            const offer = await createOffer();
            socket.emit("call-user", { emailId, offer });
            setRemoteEmailId(emailId);
        },
        [createOffer, socket]
    );

    const handleNegotiation = useCallback(async () => {
        // console.log("oops neg needed");
        const localOffer = peer.localDescription;
        socket.emit("call-user", { emailId: remoteEmailId, offer: localOffer });
    }, [peer.localDescription, remoteEmailId, socket]);

    useEffect(() => {
        peer.addEventListener("negotiationneeded", handleNegotiation);
        return () => {
            peer.removeEventListener("negotiationneeded", handleNegotiation);
        };
    }, [handleNegotiation, peer]);

    const handleIncomingCall = useCallback(
        async (data) => {
            console.log("runnnnnnnnn");
            const { fromEmail, offer } = data;
            console.log("incomming call from: ", fromEmail, offer);
            const ans = await createAnswer(offer);
            console.log("call accepted");
            socket.emit("call-accepted", { emailId: fromEmail, ans });
            setRemoteEmailId(fromEmail);
        },
        [createAnswer, socket]
    );

    const handleCallAccepted = useCallback(
        async (data) => {
            console.log("yayyyyy");
            const { ans } = data;
            console.log("call got accepted", ans);
            await setRemoteAns(ans);
        },
        [setRemoteAns]
    );

    const getUserMediaStream = useCallback(async () => {
        console.log("yayyaa");
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });

        setMyStream(stream);
    }, []);

    useEffect(() => {
        getUserMediaStream();
    }, [getUserMediaStream]);

    useEffect(() => {
        console.log("run");
        socket;
        socket.on("user-joined", handleNewUserJoined);
        socket.on("incomming-call", handleIncomingCall);
        socket.on("call-accepted", handleCallAccepted);
        // getUserMediaStream();

        return () => {
            socket.off("user-joined", handleNewUserJoined);
            socket.off("incomming-call", handleIncomingCall);
            socket.off("call-accepted", handleCallAccepted);
        };
    }, [handleCallAccepted, handleIncomingCall, handleNewUserJoined, socket]);

    return (
        <>
            <div>room page</div>
            <button
                onClick={() => {
                    sendStream(myStream);
                }}
            >
                Send My Video
            </button>
            <div>you are connected to {remoteEmailId}</div>
            <ReactPlayer url={myStream} playing={true} muted={true} />
            <ReactPlayer url={remoteStream} playing={true} muted={true} />
        </>
    );
};
